import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from "hono/cors";

const app = new Hono();
app.use("/*", cors());

const v1 = new Hono();

v1.route("/user", userRouter);
v1.route("/blog", blogRouter);

app.route("/api/v1", v1);
export default app;
