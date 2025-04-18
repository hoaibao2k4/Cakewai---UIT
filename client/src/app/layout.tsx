import type { Metadata } from "next";
import "./globals.css";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { ReduxProvider } from "./reduxprovider";
import ModalWrapper from "./modalwapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";
import Loading from "~/components/animation";
import type { Viewport } from "next";
import { Roboto } from "next/font/google";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  subsets: ["vietnamese"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto"
});

export const metadata: Metadata = {
  title:
    "CakewaiTown (Tận tụy - Chất lượng - Phụng sự) nơi chiếc bánh vẽ nên câu chuyện",
  description:
    "CakewaiTown một trang web trực tuyến về thương hiệu bánh ngọt uy tín được xây dựng dựa trên sự giao thoa giữa phong cách Á - Âu. Phục vụ đa dạng mẫu mã, hỗ trợ chuyên nghiệp tận tâm",
  robots: "index, follow",
  keywords:
    "CakewaiTown, Cakewai, Cakewai Town, bánh ngọt, bakery, bánh mềm mịn, đặt bánh online, khuyến mãi, bánh sinh nhật, minicakes, bánh mì, bánh mặn, bữa ăn nhẹ",
  openGraph: {
    title: "CakewaiTown (Tận tụy - Chất lượng - Phụng sự)",
    description:
      "CakewaiTown một trang web trực tuyến về thương hiệu bánh ngọt uy tín được xây dựng dựa trên sự giao thoa giữa phong cách Á - Âu. Phục vụ đa dạng mẫu mã, hỗ trợ chuyên nghiệp tận tâm",
    url: "https://cakewaitown.com/",
    siteName: "Cakewai Town",
    type: "website",
    locale: "vi_VN",
  },
  alternates: {
    canonical: "https://cakewaitown.com",
  },
  icons: {
    icon: "/assets/icons/favicon.svg",
  },
};

export const viewPort: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/flavicon.svg" />
      </head>
      <body
        className={`${roboto.className} antialiased`}
      >
        <ReduxProvider>
          <ModalWrapper>
            <Header />
            <Suspense fallback={<Loading />}>
              <div>{children}</div>
            </Suspense>
            <Footer />
            <ToastContainer />
          </ModalWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
