// // const withTM = require("next-transpile-modules")(["rooks"]);
// import tm from "next-transpile-modules";
// import nextMdx from "@next/mdx";
// import remarkGfm from "remark-gfm";
// import remarkComment from "remark-remove-comments";
// import remarkHTML from "remark-html";
// const withMDX = nextMdx({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm, remarkComment],
//     rehypePlugins: [],
//   },
// });

// const withTM = tm(["rooks"]);

// const config = withTM({
//   reactStrictMode: true,
//   images: {
//     unoptimized: true,
//   },
// });

// export default withMDX({
//   pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
//   ...config,
// });


import { withContentCollections } from '@content-collections/next';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        permanent: false,
      },
    ];
  },
};

export default withContentCollections(config);