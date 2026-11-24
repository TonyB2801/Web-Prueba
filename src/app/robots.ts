import type { MetadataRoute } from "next";
import { permitirIndexar, urlSitio } from "@/lib/sitio";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: permitirIndexar ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${urlSitio}/sitemap.xml`,
  };
}
