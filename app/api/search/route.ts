import { NextResponse } from "next/server";
/*
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // const { q:query } = req.query;
    console.log("At the API")

    res.status(200).json({ message: "Hey dude!" });
}
*/
export async function GET() {
    return NextResponse.json({ "message": "Hello, Next.js!" })
}