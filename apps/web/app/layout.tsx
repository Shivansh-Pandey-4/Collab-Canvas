import "@repo/ui/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "Collab Canvas",
  description: "Real-Time Collaborative Canvas",
  icons: [
    { rel: "icon", type: "image/png", sizes: "192x192", url: "/favicon/android-chrome-192x192.png", },
    { rel: "icon", type: "image/png", sizes: "512x512", url: "/favicon/android-chrome-512x512.png", },

    //! Apple Icons
    { rel: "apple-touch-icon", type: "image/ico", url: "/favicon/apple-touch-icon.png", },

    //! Favion Icons
    { rel: "icon", type: "image/ico", url: "/favicon/favicon.ico", },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon/favicon-16x16.png", },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon/favicon-32x32.png", },
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={GeistSans.className}>
        <div>
          <Provider >
            {children}
          </Provider>
        </div>
      </body>
    </html>
  );
}
