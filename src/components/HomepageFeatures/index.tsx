import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Team from './Team';
import FadeInSection from './FadeInSection';
function Component1() {
  return (
    <div className="max-w-full mx-auto flex justify-between gap-5 py-8 2xl:px-48 lg:py-20 px-8 bg-gray-100 sectionA place-items-center">
      <div className="w-[100%] lg:w-[80%] hidden md:block">
        <figure>
          <img
            src="/img/case-study/3.1-demo.gif"
            className="diagram screenshot"
            alt="A demonstration of Willow. On the left side of the screen is a PostgreSQL terminal. On the right side of the screen is a Redis cache shown in RedisInsight. An INSERT command is performed in the PostgreSQL terminal, and the inserted data automatically appears in the Redis cache."
          />
        </figure>
      </div>
      <div className="text-center">
        <h1 className="text-gray-600 dark:text-slate-100 text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0">
          Sync caches in near real-time using change data capture
        </h1>
        <figure>
          <img
            src="/img/case-study/3.1-demo.gif"
            className="diagram screenshot max-w-[450px] md:hidden w-[90%]"
            alt="A demonstration of Willow. On the left side of the screen is a PostgreSQL terminal. On the right side of the screen is a Redis cache shown in RedisInsight. An INSERT command is performed in the PostgreSQL terminal, and the inserted data automatically appears in the Redis cache."
          />
        </figure>
        <p className="text-gray-600 dark:text-slate-100 uppercase text-large tracking-wide font-semibold mt-6 mb-2">
          Technologies
        </p>
        <div className="flex gap-4 md:mt-3 justify-center">
          <img className="size-full w-14" src="/img/debezium.svg" />
          <img className="size-full w-14 dark:hidden" src="/img/kafka.svg" />
          <img
            className="size-full w-8 hidden dark:block mx-3"
            src="/img/kafka_white.svg"
          />
          <img className="size-full w-14" src="/img/typescript.svg" />
          <img className="size-full w-14 ml-2" src="/img/docker.svg" />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="dark:sectionB max-w-full mx-auto flex justify-between py-8 gap-5 2xl:px-48 lg:py-20 px-8 items-center">
      <div className="text-center py-0">
        <h1 className="text-gray-600 dark:text-slate-100 text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0">
          Easy to setup and teardown
        </h1>
        <img
          src="/img/case-study/3.2-2_source.png"
          alt="source form"
          className="max-w-[450px] md:hidden w-[90%] mx-auto rounded shadow-[0_0_10px_grey] dark:shadow-none"
        />
        <p className="text-gray-600 dark:text-slate-100 text-xl tracking-wide mt-6 mb-2">
          Without requiring in-depth technical knowledge, pipelines can be
          created or deleted using Willow's intuitive UI
        </p>
      </div>
      <div className="w-[100%] lg:w-[60%] hidden md:block">
        <img
          src="/img/case-study/3.2-2_source.png"
          alt="source form"
          className="align-top object-fill border-2 rounded shadow-[0_0_10px_grey] dark:shadow-none"
        />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="max-w-full mx-auto flex justify-center gap-5 py-8 2xl:px-48 lg:py-20 px-8 bg-gray-100 sectionA place-items-center">
      <div className="w-[100%] lg:w-[60%] 2xl:w-[53%] hidden md:block">
        <img
          src="/img/home-page-diy.png"
          alt="Producer Consumer Image"
          className="align-top object-fill rounded shadow-[0_0_10px_grey] dark:shadow-none"
        />
      </div>
      <div className="text-center">
        <h1 className="text-gray-600 dark:text-slate-100 text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0">
          Say goodbye to DIY solutions
        </h1>
        <img
          src="/img/home-page-diy.png"
          alt="Producer Consumer"
          className="max-w-[450px] md:hidden w-[90%] mx-auto border-2 rounded block shadow-[0_0_10px_grey]"
        />
        <a
          href="/case-study"
          className="text-white font-normal px-5 text-lg py-3 rounded-full bg-willowGreen-600 antialiased inline-block mt-6 hover:no-underline hover:text-white hover:bg-willowGreenLight transition"
        >
          Read Case Study
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="flex flex-col">
      <FadeInSection fadeDistance={350}>
        <Component1 />
      </FadeInSection>
      <FadeInSection fadeDistance={350}>
        <Component2 />
      </FadeInSection>

      <FadeInSection fadeDistance={350}>
        <Component3 />
      </FadeInSection>

      <FadeInSection fadeDistance={350}>
        <Team />
      </FadeInSection>
    </div>
  );
}
