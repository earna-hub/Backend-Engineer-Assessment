import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
    res.status(200).json({
        users: [
            {
                id: 1,
                name: "John Doe",
                email: "john@doe.com",
            },
        ],
    });
};

