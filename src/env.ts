import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DOMAIN: z.string().url(),
    AUTH_SECRET: z.string(),
    AUTH_TRUST_HOST: z.string().url().optional(), // This is needed to make next-auth work in applications running from behind a proxy
  },

  runtimeEnv: {
    DOMAIN: process.env.DOMAIN,
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_TRUST_HOST: process.env.AUTH_TRUST_HOST,
  },

  emptyStringAsUndefined: true,
});
