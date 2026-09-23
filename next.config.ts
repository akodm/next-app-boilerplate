import type { NextConfig } from 'next';
import { linguiMacroSwcPlugin } from '@lingui/swc-plugin/options';

const nextConfig: NextConfig = {
  experimental: {
    swcPlugins: [linguiMacroSwcPlugin()],
  },
  turbopack: {
    rules: {
      '*.po': {
        loaders: ['@lingui/loader'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
