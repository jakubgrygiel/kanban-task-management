import { NextApiRequest, NextApiResponse } from "next";

export const allowedMethods = ["GET", "POST", "PUT", "DELETE"];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === undefined || !allowedMethods.includes(req.method))
    return res.status(405).send({ message: "Method not allowed." });

  const userId = req.body.userId;

  if (req.method === "GET") {
  }
  if (req.method === "POST") {
    const newData = req.body.data;
  }
  if (req.method === "PUT") {
    const updatedData = req.body.data;
  }
  if (req.method === "DELETE") {
  }
  res.status(200).json({ name: "data" });
}
