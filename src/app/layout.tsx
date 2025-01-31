import type { Metadata } from 'next';
import { AlertDialogProvider } from '@/components/ui/extended/alert-dialog-provider';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { NextIntlProvider } from '@/providers/next-intl-provider';
import { ReactQueryProvider } from '@/providers/react-query-provider';
import { GoogleTagManager } from '@next/third-parties/google';
import { getLocale, getMessages, getNow, getTimeZone } from 'next-intl/server';
import { inter, sourceSerif4 } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Triple i',
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL ?? ''),
  icons: {
    icon: '/icons/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const now = await getNow();
  const timeZone = await getTimeZone();
  const messages = await getMessages();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sourceSerif4.variable} min-h-screen font-sans antialiased`}>
        <ReactQueryProvider>
          <NextIntlProvider locale={locale} messages={messages} now={now} timeZone={timeZone}>
            {/* <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
            > */}
            <AlertDialogProvider>
              <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ''} />
              {children}
            </AlertDialogProvider>
            {/* </ThemeProvider> */}
          </NextIntlProvider>
          <Toaster />
          <SonnerToaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
