const { createWriteStream } = require("fs");
const { SitemapStream } = require("sitemap");

const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/productshop", changefreq: "weekly", priority: 0.8 },
    { url: "/storelocation", changefreq: "monthly", priority: 0.6 },
    { url: "/testimoniesandfacts", changefreq: "monthly", priority: 0.5 },
    { url: "/contactus", changefreq: "monthly", priority: 0.5 },
    { url: "/aboutus", changefreq: "monthly", priority: 0.5 },
];

const stream = new SitemapStream({ hostname: "https://yourwebsite.com" });
const writeStream = createWriteStream("./public/sitemap.xml");

stream.pipe(writeStream);
links.forEach(link => stream.write(link));
stream.end();

console.log("✅ Sitemap generated!");
