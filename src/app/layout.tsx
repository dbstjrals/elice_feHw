"use client";

import localFont from "next/font/local";
import { GlobalStyle } from "@/styles/globalStyle";

export const Pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/PretendardVariable.ttf",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={Pretendard.className} suppressHydrationWarning={true}>
        <GlobalStyle />
        {children}
      </body>
    </html>
  );
}
