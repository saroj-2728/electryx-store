import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();
export const prisma = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = prisma;
}
