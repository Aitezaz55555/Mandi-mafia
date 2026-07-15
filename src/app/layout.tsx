import type { Metadata } from "next";
import { fontHeading, fontBody, fontGothic } from "@/lib/fonts";
import { constructMetadata } from "@/utils/metadata";
import Providers from "@/components/providers";
import { PageContainer } from "@/components/layout/PageContainer";
import "./globals.css";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontBody.variable} ${fontGothic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-ivory">
        <Providers>
          <PageContainer>{children}</PageContainer>
        </Providers>
      </body>
    </html>
  );
}
