import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { path, slug } = req.query;

  console.log(path, slug);
  try {
    let targetUrl: string;
    let finalSlug = slug === ":slug*" ? "" : slug;

    switch (path) {
      case "web":
        targetUrl = `https://app.muslimpro.app/${finalSlug}`;
        break;
      case "web2":
        targetUrl = `https://app.muslimpro.app/${finalSlug}`;
        break;
      default:
        return res.status(404).json({ error: "Invalid path" });
    }

    const proxyRes = await fetch(targetUrl);
    const data = await proxyRes.text();

    // return new NextResponse(data, {
    //   headers: {
    //     "Content-Type": proxyRes.headers.get("Content-Type") || "text/html",
    //   },
    //   status: proxyRes.status,
    // });
    res.setHeader(
      "content-type",
      proxyRes.headers.get("content-type") || "text/html"
    );
    return res.status(proxyRes.status).send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error proxying request" });
  }
}
