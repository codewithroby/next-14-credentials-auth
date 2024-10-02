import { z } from "zod";

export const emailSchema = z
  .string({
    required_error: "Email is required.",
    invalid_type_error: "Invalid email.",
  })
  .regex(new RegExp(/^[a-zA-Z\d._%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/), {
    message: "Invalid email.",
  });
