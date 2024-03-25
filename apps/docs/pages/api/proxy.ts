import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { path, slug } = req.query;

  try {
    let targetUrl: string;
    let finalSlug = slug === ":slug*" ? "" : slug;

    switch (path) {
      case "web":
        targetUrl = `https://test-turborepo-web-five.vercel.app/web${finalSlug}`;
        break;
      case "web2":
        targetUrl = `https://test-turborepo-web2.vercel.app/web2${finalSlug}`;
        break;
      default:
        return res.status(404).json({ error: "Invalid path" });
    }

    const proxyRes = await fetch(targetUrl);
    const contentType = proxyRes.headers.get("Content-Type");

    if (contentType?.includes("image")) {
      const arrayBuffer = await proxyRes.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      console.log(buffer);
      res.setHeader("Content-Type", contentType);
      // res.setHeader("Content-Type", 'application/javascript');
      return res.send(buffer);
    } else {
      const data = await proxyRes.text();
      res.setHeader("Content-Type", contentType || "text/html");
      console.log(data);
      return res.send(data);
    }
    // const data = await proxyRes.text();

    // return new NextResponse(data, {
    //   headers: {
    //     "Content-Type": proxyRes.headers.get("Content-Type") || "text/html",
    //   },
    //   status: proxyRes.status,
    // });
    // res.setHeader("Content-Type", contentType || "text/html");
    // return res.status(proxyRes.status).send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error proxying request" });
  }
}
