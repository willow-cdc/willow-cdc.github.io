import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Team from './Team';
function Component1() {
  return (
    <div className="max-w-5xl mx-auto flex justify-between gap-5 py-8 lg:py-20">
      <div className="w-[100%] lg:w-[80%] hidden md:block">
        <img
          src="/img/case-study/3.1-demo.gif"
          alt="redis-insight"
          className="align-top object-fill border-2 border-black border-solid rounded drop-shadow-2xl"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0">
          Sync caches in real-time using change data capture
        </h1>
        <img
          src="/img/case-study/3.1-demo.gif"
          alt="redis-insight"
          className="max-w-[450px] md:hidden w-[90%] mx-auto border-2 border-black border-solid rounded drop-shadow-2xl"
        />
        <p className="uppercase text-large tracking-wide font-semibold mt-6 mb-2">
          Technologies
        </p>
        <div className="flex gap-4 md:mt-3 justify-center">
          <img className="size-full w-14" src="/img/debezium.svg" />
          <img className="size-full w-14" src="/img/kafka.svg" />
          <img className="size-full w-14" src="/img/typescript.svg" />
          <img className="size-full w-14 ml-2" src="/img/docker.svg" />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="max-w-5xl mx-auto flex justify-between gap-5 py-8 lg:py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0">
          Easy to setup and teardown
        </h1>
        <img
          src="/img/case-study/3.1-2_source.png"
          alt="source form"
          className="max-w-[450px] md:hidden w-[90%] mx-auto border-2 border-black border-solid rounded drop-shadow-2xl"
        />
      </div>
      <div className="w-[100%] lg:w-[60%] hidden md:block">
        <img
          src="/img/case-study/3.1-2_source.png"
          alt="source form"
          className="align-top object-fill border-2 border-black border-solid rounded drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="max-w-5xl mx-auto flex justify-between gap-5 py-8 lg:py-20">
      <div className="w-[100%] lg:w-[60%] hidden md:block">
        <img
          src="/img/case-study/3.1-2_source.png"
          alt="redis-insight"
          className="align-top object-fill border-2 border-black border-solid rounded drop-shadow-2xl"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl md:text-[44px] font-medium tracking-tight leading-tight md:leading-[52px] mt-0">
          Say goodbye to DIY solutions
        </h1>
        <img
          src="/img/case-study/3.1-2_source.png"
          alt="redis-insigh"
          className="max-w-[450px] md:hidden w-[90%] mx-auto border-2 border-black border-solid rounded drop-shadow-2xl block"
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
      <Component1 />
      <Component2 />
      <Component3 />
      <Team />
    </div>
  );
}
