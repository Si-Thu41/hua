import { NextConfig } from 'next';

let withFlowbite: any = (cfg: NextConfig) => cfg;
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  withFlowbite = require('flowbite-react/plugin/nextjs');
} catch (e) {
  // flowbite-react not installed — continue without plugin
}

const nextConfig: NextConfig = withFlowbite({
  reactStrictMode: true,
  // ...existing config...
});

export default nextConfig;