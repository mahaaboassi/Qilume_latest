import Hero from "./sections/hero/hero";
import Marquee from "./sections/marquee/marquee";
import Treatments from "./sections/treatments/treatments";

export default function Home() {
  return (<div>
    <Hero/>

    <Marquee/>
    <div className="bg-[var(--light)] flex flex-col gap-10 pt-10">
      <Treatments/>
    </div>

  </div>
  );
}
