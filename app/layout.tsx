import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import StyledComponentsRegistry from "@/components/StyledComponentRegistry";
import GlobalStyle from "@/components/GlobalStyle";

export const metadata: Metadata = {
  title: "QR Code Component",
  description: "QR Code Component challenge by Frontend Mentor",
};

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
