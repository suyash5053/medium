import { PrismaNeon } from "@prisma/adapter-neon";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from "../generated/prisma";
import { signupInput, signinInput } from "@suyash5053/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const connectionString = c.env.DATABASE_URL;
  const adapter = new PrismaNeon({ connectionString });
  const prisma = new PrismaClient({ adapter });
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) {
    return c.json({
      msg: "Wrong information sent",
    });
  }
  const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name || body.email.split("@")[0],
      password: body.password,
    },
  });

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json({
    token,
  });
});

userRouter.post("/signin", async (c) => {
  const connectionString = c.env.DATABASE_URL;
  const adapter = new PrismaNeon({ connectionString });
  const prisma = new PrismaClient({ adapter });

  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if (!success) {
    return c.json({
      msg: "Wrong information sent",
    });
  }
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: {
          equals: body.password || "",
        },
      },
    });

    if (!user) {
      c.status(403);
      return c.text("Wrong inputs given or User not found");
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      token,
    });
  } catch {
    return c.text("Something went wrong", 400);
  }
});
