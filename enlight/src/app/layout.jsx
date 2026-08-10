import { Epilogue } from "next/font/google";
import "@/public/scss/base.scss";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Preloader from "../component/Preloader";
import { GoogleAnalytics } from '@next/third-parties/google';

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata = {
  title: "Enlight",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <GoogleAnalytics gaId="G-SMLPG13EQ3" />
        <Preloader/>
        <Header />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
