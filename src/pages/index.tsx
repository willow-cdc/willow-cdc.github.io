import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

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
      className="bg-gradient-to-b from-willowGreen-600 to-willowGreen-700 flex flex-col justify-center sm:flex-col p-6 items-center gap-8 scroll-mt-40"
    >
      <article className="px-4 text-white antialiased py-8 md:py-10 pb-14 relative font-sans max-w-full">
        <h1 className="leading-[48px] mb-2 text-white font-main text-4xl md:text-5xl tracking-tighter font-medium max-w-4xl mx-auto text-center md:leading-tight">
          Willow
        </h1>
        <p className="text-xl leading-normal md:text-2xl mx-auto text-center max-w-6xl text-gray-100 mt-1 md:mt-2 md:leading-10">
          An open-source, self-hosted framework for creating
          <br />{' '}
          <span>
            <span className="text-[#b9b689]">
              change data capture{' '}
            </span>
            pipelines
          </span>{' '}
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
      title={'Willow Framework'}
      description="The easiest way to setup change data capture pipelines"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
