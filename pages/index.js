import WorkPiece from "../components/workpiece";

const sampleworks = [
  {
    title: `ResMed`,
    description: `ResMed is an ASX-listed, NASDAG-listed health company who
        provides sleep-boosting products • We helped ResMed to refresh
        online Clinician Portal • The new digital experience has helped
        worldwide clinicians to better provide support to their patients`,
  },
  {
    title: `Cochlear`,
    description: `Cochlear is an ASX-listed, NASDAG-listed Australia company who
      provide hearing solutions • We helped Cochlear to develop their
      Online Clinician Portal • The portal has helped clinicians
      worldwide to provide better healthcare to their patients`,
  },
  {
    title: `CommSec`,
    description: `CommSec is an ASX-listed online trading platform owned by the
      Commonwealth Bank of Australia • We helped CommSec to develop
      their new digital Onboarding Flow for new customers • The new
      experience improved conversion rate by 40%`,
  },
  {
    title: `Pepper Money`,
    description: `Pepper Money is an Australia non-bank lender with a
      down-to-earth approach • We helped Pepper to refresh their
      website and online customer portal • The new digital experience
      has helped Pepper gain more customers and provide better support
      to existing customers`,
  },
  {
    title: `Rowmark Australia`,
    description: `Rowmark Australia is the Australia official distributor of the
      world-renowned Rowmark laser engraving materials • We helped
      Rowmark Australia to develop their ecommerce store and landing
      pages to increase online sales and engage new markets`,
  },
  {
    title: `Australia-iconic Online retailers and Education providers`,
    description: `We have worked with iconic Australia retailers such as Paddy
      Pallin, Bing Lee, Constume Box, Princess Polly improve their
      existing online store • We also helped UTS, UNSW and ANMFSA to
      improve their Online Learning and Survey system`,
  },
];
function HomePage() {
  return (
    <div className="bg-white pt-12 text-gray-900">
      <header className="mt-6 lg:mt-64 bg-white px-3 lg:px-12">
        <div className="max-w-lg lg:max-w-full">
          <h1 className="text-3xl lg:text-6xl font-black leading-tight">
            KoalaDigital is a Web, Shopify and Designer service in the
            <span>Ryde areas of Sydney Australia</span>
          </h1>
          <p className="mt-6 text-2xl lg:text-4xl leading-snug">
            We are a small team of web developer and designer • We work with
            business of any size to improve their Websites, Shopify stores or
            Online Portals • Our products do one thing well —
            <span className="font-bold">delight your customers</span>
          </p>
        </div>
      </header>

      <section className="mt-24 px-3 lg:mt-48 lg:px-12">
        <div className="mx-auto lg:max-w-full">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            Sample work
          </h2>
          <div className="flex flex-wrap mt-12 lg:mt-24">
            {sampleworks.map((workpiece, index) => (
              <WorkPiece key={index} {...workpiece} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 lg:mt-48 px-3 lg:px-12 py-12 lg:py-24 bg-black text-gray-400">
        <div className="max-w-lg mx-auto lg:max-w-full">
          <h2 className="text-xl lg:text-5xl font-bold leading-tight">
            Whether you want to try a new idea, refresh an existing website, or
            simply need a webmaster who can look after your digital presence,
            feel free to drop us an email. First consultation is on us.{` `}
            <a className="text-gray-700" href="mailto:bach@koaladigital.com.au">
              Email us
            </a>
          </h2>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
