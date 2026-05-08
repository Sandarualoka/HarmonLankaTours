import SectionImage from "../assets/section_img.jpg";
import Fresco_Bg_non from "../assets/fresco-bg-none.png";

export default function ExperienceSection() {
  return (
    <section className="relative w-full bg-[#f5f5f3] overflow-hidden">
      {/* Right side floating faded fresco image */}
      <img
        src={Fresco_Bg_non}
        alt="Fresco background"
        className="pointer-events-none absolute bottom-6 right-0 w-[180px] sm:w-[240px] md:w-[300px] lg:w-[360px] opacity-20 animate-floatSlow object-contain z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Left Image */}
          <div className="relative flex justify-center lg:justify-start">
            <img
              src={SectionImage}
              alt="Sri Lanka scenic landmark"
              className="w-full max-w-[700px] h-[750px] object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="max-w-2xl">
            <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] font-semibold tracking-tight text-black mb-8">
              Timeless Journeys,
              <br />
              Curated with Care
            </h2>

            <div className="space-y-8 text-[16px] sm:text-[17px] leading-8 text-neutral-800">
              <p>
                Step into a travel experience designed around comfort,
                elegance, and discovery. We create thoughtfully planned
                journeys across Sri Lanka that allow you to explore the
                island’s beauty at your own pace, with every detail arranged to
                make your adventure smooth, memorable, and deeply personal.
              </p>

              <p>
                From misty highlands and cultural landmarks to coastal escapes
                and hidden local gems, each itinerary is shaped to reflect your
                interests and travel style. Our goal is to turn every moment
                into something meaningful, giving you not just a holiday, but a
                collection of unforgettable stories to take home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}