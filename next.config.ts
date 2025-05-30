import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);


// const nextConfig: NextConfig = {
//   /* config options here */
//   env: {
//     MONGODB_URI: process.env.MONGODB_URI,
//   },
// };