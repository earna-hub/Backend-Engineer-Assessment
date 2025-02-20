import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    const statusCode = res.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
    });
};
