import type { Metadata } from 'next';
import { AlertDialogProvider } from '@/components/ui/extended/alert-dialog-provider';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import { NextIntlProvider } from '@/providers/next-intl-provider';
import { ReactQueryProvider } from '@/providers/react-query-provider';
import Script from 'next/script';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager (GTM) - Offloaded to Partytown */}
        <Script
          id="gtm-script"
          strategy="worker" // Loads GTM in a web worker via Partytown
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${sourceSerif4.variable} min-h-screen font-sans antialiased`}>
        <noscript>
          <iframe
            title="Google Tag Manager"
            sandbox="allow-scripts allow-same-origin"
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ReactQueryProvider>
          <NextIntlProvider
            locale="en"
            messages={{}}
            now={new Date()}
            timeZone="UTC"
          >
            <AlertDialogProvider>
              {children}
            </AlertDialogProvider>
          </NextIntlProvider>
          <Toaster />
          <SonnerToaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
