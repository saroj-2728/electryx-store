import { Request, Response, RequestHandler } from "express";
import { prisma } from "../../prismaConfig/prisma.js"
import { Prisma } from "@prisma/client";

export const handleUserProfileSetup: RequestHandler = async (
    req: Request,
    res: Response
) => {
    const { userId }: { userId: string } = req.body;

    try {
        const existingUser = await prisma.userProfile.findUnique({
            where: {
                userId
            }
        })

        if (existingUser) {
            res.status(400).json({
                success: false,
                message: "Profile is already created",
            });
        }

        await prisma.userProfile.create({
            data: {
                userId
            }
        })

        res.status(200).json({
            success: true,
            message: "Profile setup successful",
        });
    }
    catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            // Handle Prisma-specific errors
            res.status(500).json({
                success: false,
                message: "Database error occurred",
                error: error.message,
            });
        }

        res.status(500).json({
            success: false,
            message: "An unexpected error occurred",
            error: error instanceof Error ? error.message : "Unknown error",
        });
    }
}