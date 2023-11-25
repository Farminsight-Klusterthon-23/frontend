import Link from "next/link";
import { GradientBar } from "./HomeSvgs";

const roundedBtnClasses =
  "px-[16px] md:px-[24px] py-[8px] text-center border border-white text-white text-[1rem] md:text-[1.125rem] text-center font-[300] leading-[230%] rounded-[24px]";

function HeroTag({ children }) {
  return (
    <span
      className={`${roundedBtnClasses} bg-hero-tag inline-block backdrop-blur-[200px]`}
    >
      {children}
    </span>
  );
}

export function HeroSection() {
  return (
    <main className="flex justify-center items-center sm:justify-around sm:items-stretch bg-[url(/vector-bg.png)] bg-no-repeat bg-bottom lg:grid grid-cols-3 min-h-[100dvh]">
      <div className="col-span-2 row-start-1 row-span-2 col-start-1 self-center pl-[5vw] relative">
        <h1 className="text-[3rem] md:text-[4rem] sm:text-[4.5rem] w-full max-w-[786px] text-white text-left leading-[131%]]">
          Empowering Farmers with Intelligent Agricultural Insights
        </h1>
        <p className="text-base text-white max-w-[512px] my-[20px]">
          Cutting-edge technology designed to revolutionize the way farmers make
          decisions and manage their crops
        </p>
        <div className="flex gap-2 mb-[50px]">
          <Link className={`${roundedBtnClasses} bg-transparent`} href="/">
            Learn more
          </Link>
          <Link
            className={`${roundedBtnClasses} bg-primary-main`}
            href={"/signup"}
          >
            Get Started
          </Link>
        </div>
        <div className="flex flex-col gap-y-[30px]">
          <GradientBar />
          <GradientBar />
          <GradientBar rotate />
          <GradientBar rotate />
        </div>
      </div>

      <div className="items-end justify-center pb-[130px] bg-[url(/hero.png)] bg-no-repeat bg-center col-span-2 row-start-1 row-span-2 col-start-1 sm:col-start-2 hidden lg:flex relative z-10">
        <div className="lg:flex gap-[8px] items-center justify-center flex-wrap hidden px-[3.2vw]">
          <HeroTag>Get Weather report</HeroTag>
          <HeroTag>Save for Offline</HeroTag>
          <HeroTag>AI Model</HeroTag>
          <HeroTag>Knowledge Base</HeroTag>
        </div>
      </div>
    </main>
  );
}

function FeatureItem({ heading, children, count }) {
  return (
    <li>
      {count && (
        <span className="text-secondary-dark font-bold block text-[2.5rem] sm:text-[3rem] leading-[80%]">
          {count}
        </span>
      )}
      <h3 className="text-[1.5rem] sm:text-[2rem] font-[400] text-white leading-[125%]">
        {heading}
      </h3>
      <p className="font-montserrat leading-[184%] font-[400]">{children}</p>
    </li>
  );
}

export function HeroTwo() {
  return (
    <section className="text-white block justify-center items-center sm:justify-around sm:items-stretch bg-[url(/vector-bg.png)] bg-no-repeat bg-bottom sm:grid grid-cols-4 min-h-[100dvh]">
      <h2 className="pl-[5vw] row-start-1 col-start-1 col-span-4 text-[2.8rem] md:text-[3.5rem] w-full text-white text-left leading-[116%] self-end">
        Revolutionising
        <br />
        <span className="block w-[94%] border-b pb-[40px] mb-[80px]">
          Agricultultre
        </span>
      </h2>
      <div className="bg-[url(/hero2.png)] bg-no-repeat bg-center col-span-2 row-start-2 row-span-2 col-start-1 hidden lg:flex bg-contain"></div>
      <div className="flex flex-col justify-center pl-[5vw] lg:pl-0 col-span-4 lg:col-span-2 row-start-2 lg:row-span-2 lg:col-start-3 relative z-20 pr-[7vw] self-center">
        <ul>
          <FeatureItem heading="Revolutionising Agricultultre">
            Navigate through complex agricultural decisions with confidence. Our
            AI system analyzes data on soil health, weather conditions, and
            historical trends to offer personalized recommendations for crop
            management.
          </FeatureItem>
          <hr className="my-[24px]" />
          <FeatureItem heading="Real-time Weather and Pest Alerts">
            Receive instant alerts about changing weather conditions and
            potential pest threats. Stay one step ahead to protect your crops
            and maximize yields..
          </FeatureItem>
          <hr className="my-[24px]" />
          <FeatureItem heading="Offline Storage">
            Save important articles and chat history for offline access. No need
            to worry about connectivity issues – your data is always within
            reach.
          </FeatureItem>
          <hr className="mt-[24px]" />
        </ul>
      </div>
    </section>
  );
}

export function HomeThirdSection() {
  return (
    <section className="px-[5dvw] font-montserrat text-white pt-[169px]">
      <h4 className="text-[2.5rem] sm:text-[3rem] mb-[32px]">
        Make informed Decisions
      </h4>
      <p className="max-w-[851px]">
        provides farmers with a comprehensive toolset to protect their crops
        against environmental challenges. The real-time nature of these features
        enables proactive decision-making, reducing the impact of pests and
        adverse weather conditions on crop yields.
      </p>
      <div className="flex min-h-[580px] mt-[20px] gap-x-[28px]">
        <div className="bg-[url(/weather-forecast.png)] bg-contain lg:bg-[length:100%_580px] bg-center bg-no-repeat w-full lg:w-[35%] h-[580px]"></div>
        <div className="hidden lg:block bg-[url(/pest-control.png)] bg-[length:100%_580px] bg-center bg-no-repeat w-[60%] h-[580px]"></div>
      </div>
      <Link
        href="/signup"
        className="text-[1rem] underline md:text-[1.5rem] block mx-auto text-center mt-[35px]"
      >
        Get Started and start making informed decisions
      </Link>
    </section>
  );
}

export function HomeFourthSection() {
  return (
    <section className="pt-[120px] text-white block justify-center items-center sm:justify-around sm:items-stretch bg-[url(/vector-bg.png)] bg-no-repeat bg-top-left sm:grid grid-cols-4 min-h-[76dvh]">
      <div className="bg-[url(/crop-ai.png)] bg-no-repeat bg-center col-span-2 row-start-1 row-span-2 col-start-1 hidden lg:flex bg-contain self-end h-[90%]"></div>
      <div className="flex flex-col justify-center pl-[5vw] lg:pl-0 col-span-4 lg:col-span-2 row-start-2 lg:row-span-2 lg:col-start-3 relative z-20 pr-[7vw] self-start">
        <ul>
          <FeatureItem count={1} heading="Optimize Your Yield with AI!">
            Encourage users to experience the AI guidance for enhanced crop
            management.
          </FeatureItem>
          <hr className="mt-[24px] mb-[56px]" />
          <FeatureItem count={2} heading="Real-Time Decision Support">
            This proactive approach empowers farmers to make timely decisions,
            allowing them to protect their crops effectively and adapt their
            farming practices based on the latest information.
          </FeatureItem>
          <hr className="mt-[24px] mb-[56px]" />
          <FeatureItem count={3} heading="Optimized Crop Management">
            Farmers benefit from optimized planting schedules, irrigation plans,
            and pest control strategies, ultimately leading to increased crop
            yields and improved overall farm productivity.
          </FeatureItem>
          <hr className="mt-[24px]" />
        </ul>
        <Link
          href="/signup"
          className="font-montserrat text-[1.2rem] sm:text-[1.5rem] mt-[24px] block"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

export function HomeLastSection() {
  return (
    <section className="py-[80px] px-4 bg-home-gradient rounded-[24px] font-montserrat text-white text-center w-[95vw] max-w-[1280px] mx-auto my-12">
      <h5 className="text-[1.5rem] sm:text-[2rem] mb-[11px]">
        Start Enjoying Agricultural AI
      </h5>
      <p className="max-w-[622px] mx-auto mb-[29px]">
        We are committed to empowering farmers with the tools they need to
        thrive in a dynamic agricultural landscape. Join us in harnessing the
        power of AI for a more sustainable and prosperous future.
      </p>
      <div className="flex gap-2 mx-auto justify-center">
        <Link className={`${roundedBtnClasses} bg-transparent`} href="/">
          Learn more
        </Link>
        <Link className={`${roundedBtnClasses} bg-primary-main`} href="/signup">
          Get Started
        </Link>
      </div>
    </section>
  );
}
