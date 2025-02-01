import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';
import createNextIntlPlugin from 'next-intl/plugin';

/**
 * Enable Bundle Analyzer
 */
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * Enable Next-Intl Plugin
 */
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
export default withSentryConfig(
  bundleAnalyzer(
    withNextIntl({
      eslint: {
        dirs: ['.'],
      },
      poweredByHeader: false,
      reactStrictMode: true,
      productionBrowserSourceMaps: true,
      serverExternalPackages: ['@electric-sql/pglite'],

      experimental: {
        authInterrupts: true,
        nextScriptWorkers: true, // ✅ Enables Partytown for external scripts
      },
    }),
  ),
  {
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT,
    silent: !process.env.CI,
    widenClientFileUpload: true,
    reactComponentAnnotation: {
      enabled: true,
    },
    tunnelRoute: '/monitoring',
    hideSourceMaps: false,
    disableLogger: true,
    automaticVercelMonitors: true,
    telemetry: false,
  },
);
