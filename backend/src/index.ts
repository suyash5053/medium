import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

const app = new Hono();

const v1 = new Hono();

v1.route("/user", userRouter);
v1.route("/blog", blogRouter);

app.route("/api/v1", v1);
export default app;
