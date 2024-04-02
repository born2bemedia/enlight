import Image from "next/image";
import "@/public/scss/home.scss";
import HomeFirst from "../component/home/HomeFirst";
import HomeSecond from "../component/home/HomeSecond";
import HomeThird from "../component/home/HomeThird";
import HomeFourth from "../component/home/HomeFourth";
import HomeFifth from "../component/home/HomeFifth";
import HomeSixth from "../component/home/HomeSixth";
import HomeSeven from "../component/home/HomeSeven";
import HomeLast from "../component/home/HomeLast";

export default function Home() {
  return (
    <>
      <HomeFirst/>
      <HomeSecond/>
      <HomeThird/>
      <HomeFourth/>
      <HomeFifth/>
      <HomeSixth/>
      <HomeSeven/>
      <HomeLast/>
    </>
  );
}
