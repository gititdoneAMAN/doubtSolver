import { z } from "zod";

export const signInSchema = z.object({
  email: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.string(),
  csrfToken: z.string().optional(),
  callbackUrl: z.string().optional(),
  json: z.string().optional(),
});
