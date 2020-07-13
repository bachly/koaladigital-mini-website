import WorkPiece from "../components/workpiece";

const sampleworks = [
  {
    title: `ResMed AirView`,
    description: `ResMed is an ASX-listed, NASDAG-listed health company who
        provides sleep-boosting products • We helped ResMed to develop a new interface for AirView, their
        online Clinician Portal • The refreshed interface has helped
        worldwide doctors to work more efficiently with their patient medical results`,
    imageSrc: "/images/KoalaDigital_SampleWork_ResMedAirView.jpg",
    imageAlt: "ResMed AirView",
  },
  {
    title: `Cochlear Clinician Portal`,
    description: `Cochlear is an ASX-listed, NASDAG-listed Australia company who
      provide hearing solutions • We helped Cochlear to extend their
      Remote Check Clinician Portal • The extended solution has helped clinicians
      worldwide to provide better remote support to their patients`,
    imageSrc: "/images/KoalaDigital_SampleWork_CochlearPortal.jpg",
    imageAlt: "Cochlear Clinician Portal",
  },
  {
    title: `CommSec Trading Platform`,
    description: `CommSec is an ASX-listed online trading platform owned by the
      Commonwealth Bank of Australia • We helped CommSec to develop
      their new digital Onboarding Flow for new customers • The new
      experience improved conversion rate by 40%`,
    imageSrc: "/images/KoalaDigital_SampleWork_CommSec.jpg",
    imageAlt: "CommSec Trading Platform",
  },
  {
    title: `Pepper Money Website and Portal`,
    description: `Pepper Money is an Australia non-bank lender with a
      down-to-earth approach • We helped Pepper to refresh their
      website and online customer portal • The new digital experience
      has helped Pepper gain more customers and provide better support
      to existing customers`,
    imageSrc: "/images/KoalaDigital_SampleWork_PepperMoney.jpg",
    imageAlt: "Pepper Money Website and Portal",
  },
  {
    title: `Rowmark Australia Wholesale Store`,
    description: `Rowmark Australia is the Australia official distributor of the
      world-renowned Rowmark laser engraving materials • We helped
      Rowmark Australia to develop their ecommerce store and landing
      pages to increase online sales and engage new markets`,
    imageSrc: "/images/KoalaDigital_SampleWork_RowmarkAustralia.jpg",
    imageAlt: "Rowmark Australia Wholesale Store",
  },
  {
    title: `Education Providers`,
    description: `We helped UTS, UNSW and ANMFSA to
      maintain and improve their Online Learning and Survey system`,
    imageSrc: "/images/KoalaDigital_SampleWork_EducationProviders.jpg",
    imageAlt: "Australian Education Providers",
  },
  {
    title: `Online Retailers`,
    description: `We helped Bing Lee, Paddy Pallin, Costume Box and Princess Polly to
      maintain and improve their Online Stores`,
    imageSrc: "/images/KoalaDigital_SampleWork_OnlineRetailers.jpg",
    imageAlt: "Australian Online Retailers",
  },
];
function HomePage() {
  return (
    <div className="bg-white pt-12 text-gray-900">
      <header className="mt-6 lg:mt-64 bg-white px-8 lg:px-12">
        <div className="lg:max-w-lg lg:max-w-full px-8">
          <h1 className="text-2xl lg:text-5xl font-black leading-tight">
            KoalaDigital / Custom Web Solutions in Ryde, Sydney Australia
          </h1>
          <p className="mt-6 text-2xl lg:text-4xl leading-snug">
            We work with business of any size to build and extend their custom
            web applications, Shopify stores and online portals • Our work does
            one thing well —{" "}
            <span className="font-bold">add values to your customers</span>
          </p>
        </div>
      </header>

      <section className="mt-24 px-0 lg:mt-48 lg:px-12">
        <div className="mx-auto lg:max-w-full">
          <h2 className="text-3xl px-8 lg:text-4xl font-bold leading-tight">
            Sample work
          </h2>
          <div className="flex flex-wrap mt-12 lg:mt-24">
            {sampleworks.map((workpiece, index) => (
              <WorkPiece key={index} {...workpiece} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 lg:mt-48 px-0 lg:px-16 py-12 lg:py-24 bg-black text-gray-400">
        <div className="px-4 lg:max-w-full">
          <h2 className="text-xl md:text-2xl lg:text-5xl font-bold leading-tight">
            Whether you develop a custom web application, refresh an existing
            web interface, or simply need a webmaster who can look after your
            digital presence,{" "}
            <a className="text-gray-700" href="mailto:bach@koaladigital.com.au">
              email us
            </a>
            . First consultation is free.{` `}
          </h2>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
