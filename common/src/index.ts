import * as z from "zod";

export const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Less than 6 characters"),
  name: z.string().optional(),
});

export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const postCreateInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updatePostInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});

export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type PostCreateInput = z.infer<typeof postCreateInput>;
export type UpdatePostInput = z.infer<typeof updatePostInput>;
