import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const path = req.nextUrl.pathname;
    const searchParams = req.nextUrl.searchParams;

    const slug = searchParams.get("slug");

    let targetUrl: string;

    switch (path) {
      case "web":
        targetUrl = `https://app.muslimpro.app/${slug}`;
        break;
      case "web2":
        targetUrl = `https://app.muslimpro.app/${slug}`;
        break;
      default:
        return new NextResponse(JSON.stringify({ error: "Invalid path" }), {
          status: 400,
        });
    }

    const proxyRes = await fetch(targetUrl);
    const data = await proxyRes.text();

    return new NextResponse(data, {
      headers: {
        "Content-Type": proxyRes.headers.get("Content-Type") || "text/html",
      },
      status: proxyRes.status,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ error: "Error proxying request" }),
      { status: 500 }
    );
  }
}
