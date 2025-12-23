import Hero from "./sections/hero/hero";
import Hint from "./sections/hint/hint";
import Instagram from "./sections/instagram/instagram";
import Marquee from "./sections/marquee/marquee";
import Review from "./sections/review/review";
import Treatments from "./sections/treatments/treatments";
import WhenNeed from "./sections/when/whenNeed";

export default function Home() {
  return (<div>
    <div className=" h-[50px] right-0 left-0 z-100 fixed 
        bg-zinc-200
        xxs:bg-purple-200
        xs:bg-blue-200
        sm:bg-green-200
        md:bg-yellow-200
        lg:bg-orange-200
        xl:bg-red-200
        2xl:bg-pink-200
    "></div>
    {/* <Hero/> */}

    {/* <Marquee/> */}
    <div className="bg-[var(--light)] flex flex-col gap-10 pt-10">
      <Treatments/>
      <WhenNeed/>
      <Review/>
      <Hint/>
      {/* <Instagram/> */}
    </div>

  </div>
  );
}
