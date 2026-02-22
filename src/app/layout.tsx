import type { Metadata } from "next";
import { Noto_Sans_KR, Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afformation × Sinarmas | K브랜드 인도네시아 풀퍼널 진출",
  description:
    "인도네시아 2.8억 시장, 당신의 브랜드로 지배하라. 계약부터 할랄인증, 물류, 마케팅, 쇼피·틱톡샵, CS까지 원스톱 풀퍼널로 K브랜드의 인도네시아 시장 진출을 완성합니다.",
  keywords: [
    "K브랜드",
    "인도네시아 진출",
    "할랄 인증",
    "쇼피 입점",
    "틱톡샵",
    "인도네시아 마케팅",
    "Afformation",
    "Sinarmas",
  ],
  openGraph: {
    title: "Afformation × Sinarmas | K브랜드 인도네시아 풀퍼널 진출",
    description:
      "계약부터 할랄인증, 물류, 마케팅, 쇼피·틱톡샵, CS까지 원스톱 풀퍼널 서비스",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${notoSansKR.variable} ${plusJakarta.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
