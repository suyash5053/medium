import { PrismaNeon } from "@prisma/adapter-neon";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "../generated/prisma";
import { postCreateInput, updatePostInput } from "@suyash5053/medium-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("authorization");
  const token = header?.split(" ")[1];
  if (!token) {
    return c.text("Unauthorized", 401);
  }
  try {
    const status = (await verify(token, c.env.JWT_SECRET)) as { id: string };
    if (status && status.id) {
      c.set("userId", status.id);
      await next();
    } else {
      return c.json(
        {
          msg: "Unauthorized",
        },
        403
      );
    }
  } catch (error) {
    return c.json(
      {
        msg: "Invalid token",
      },
      403
    );
  }
});

blogRouter.post("/", async (c) => {
  const userId = c.get("userId");
  const connectionString = c.env.DATABASE_URL;
  const adapter = new PrismaNeon({ connectionString });
  const prisma = new PrismaClient({ adapter });

  const body = await c.req.json();
  const { success } = postCreateInput.safeParse(body);
  if (!success) {
    return c.json({
      msg: "Wrong input received",
    });
  }
  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId,
    },
  });

  return c.json({
    id: blog.id,
  });
});

blogRouter.put("/", async (c) => {
  const userId = c.get("userId");
  const connectionString = c.env.DATABASE_URL;
  const adapter = new PrismaNeon({ connectionString });
  const prisma = new PrismaClient({ adapter });

  const body = await c.req.json();
  const { success } = updatePostInput.safeParse(body);
  if (!success) {
    return c.json({ msg: "Wrong input received" });
  }
  await prisma.post.update({
    where: {
      id: body.id,
      authorId: userId,
    },
    data: {
      title: body.title,
      content: body.content,
    },
  });
  return c.text("updated the post");
});

blogRouter.get("/bulk", async (c) => {
  const connectionString = c.env.DATABASE_URL;
  const adapter = new PrismaNeon({ connectionString });
  const prisma = new PrismaClient({ adapter });

  const blog = await prisma.post.findMany({});
  return c.json({
    blog,
  });
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const connectionString = c.env.DATABASE_URL;
  const adapter = new PrismaNeon({ connectionString });
  const prisma = new PrismaClient({ adapter });

  const blog = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  return c.json({
    blog,
  });
});
