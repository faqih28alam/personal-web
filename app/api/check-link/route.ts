import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const url = req.nextUrl.searchParams.get("url");

    if (!url) return NextResponse.json({ valid: false });

    try {
        const res = await fetch(url, { method: "HEAD" });
        return NextResponse.json({ valid: res.ok });
    } catch {
        return NextResponse.json({ valid: false });
    }
}