import Hero from "./sections/hero/hero";
import Hint from "./sections/hint/hint";
import Instagram from "./sections/instagram/instagram";
import Marquee from "./sections/marquee/marquee";
import Review from "./sections/review/review";
import Treatments from "./sections/treatments/treatments";
import WhenNeed from "./sections/when/whenNeed";

export default function Home() {
  return (<div>
    <Hero/>

    
    <div className="bg-[var(--light)] flex flex-col gap-5 md:gap-20 ">
      <Marquee/>
      <div className="pt-10">
        <Treatments/>
      </div>
      <WhenNeed/> 
      <Review/>
      <Hint/>
      <Instagram/>
    </div>

  </div>
  );
}
