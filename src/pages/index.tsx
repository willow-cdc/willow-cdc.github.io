import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    //   <div className="container">
    //     <Heading as="h1" className="hero__title">
    //       {siteConfig.title}
    //     </Heading>
    //     <p className="hero__subtitle">{siteConfig.tagline}</p>
    //     <div className={styles.buttons}>
    //       <Link
    //         className="button button--secondary button--lg"
    //         to="/case-study">
    //         Read our Case Study
    //       </Link>
    //     </div>
    //   </div>
    // </header>
    <section
      id="hero"
      className="bg-gradient-to-r from-willowGreen-600 to-heroContrast dark:from-willowGreen-900 dark:to-heroContrast flex flex-col justify-center sm:flex-col p-6 items-center gap-8 scroll-mt-40 h-lvh"
    >
      <article className="px-4 text-white antialiased py-8 md:py-10 pb-14 relative font-sans max-w-full">
        <h1 className="leading-[48px] mb-2 text-white font-main text-4xl md:text-5xl tracking-tighter font-medium max-w-4xl mx-auto text-center md:leading-tight">
          Willow is an open-source framework for creating
          <span className="text-[#20D6DF] dark:text-willowGreen-400">
            {" "}
            change data capture{" "}
          </span>
          pipelines
        </h1>
        <p className="text-xl leading-normal md:text-2xl mx-auto text-center max-w-6xl text-gray-100 mt-1 md:mt-2 md:leading-10">
          Built to connect existing data stores and update caches in near real-time
        </p>
        <div className="flex flex-col-reverse md:flex-row justify-center p-6 items-center gap-2 mt-8 w-full">
          <Link
            className="button button--secondary button--lg"
            to="/case-study"
          >
            Read Case Study
          </Link>
        </div>
      </article>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={"Willow Framework"}
      description="The easiest way to set up change data capture pipelines"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
