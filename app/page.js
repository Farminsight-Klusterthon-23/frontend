import Image from "next/image"
import Navbar from "./_components/Navbar"

import {
  HeroSection,
  HeroTwo,
  HomeThirdSection,
  HomeFourthSection,
  HomeLastSection,
} from "./_components/HomeComponents"
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-primary-dark">
        <HeroSection />
        <HeroTwo />
        <HomeThirdSection />
        <HomeFourthSection />
        <HomeLastSection />
        <Image
          alt="footer vector"
          src="/home-vector.png"
          className="w-full h-full"
          width={500}
          height={400}
        />
      </div>
    </>
  )
}
