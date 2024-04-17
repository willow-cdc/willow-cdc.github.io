import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

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
          className="text-white font-normal px-5 text-lg py-3 rounded-full bg-[#409935] antialiased inline-block mt-6 hover:no-underline hover:text-white hover:bg-primaryLight transition"
        >
          Read Case Study
        </a>
      </div>
    </div>
  );
}

interface MemberProps {
  image: string;
  name: string;
  location: string;
  personalWebsite: string;
  github: string;
  linkedin: string;
  email: string;
}

function Member({
  image,
  name,
  location,
  personalWebsite,
  github,
  linkedin,
  email,
}: MemberProps) {
  return (
    <div className="portrait-card flex flex-col">
      <div className="">
        <img className="max-h-64 portrait-img" src={image} />
      </div>
      <p className="lp-name text-gray-800 text-lg font-semibold text-left mt-2 mb-0 p-override text-center pb-4 md:pb-0">
        {name}
      </p>
      <p className="lp-para text-gray-600 text-left mb-1 p-override text-center">
        {location}
      </p>
      <div className="flex gap-1 mx-auto mt-4">
        <a
          href={personalWebsite}
          target="_blank"
          className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-world"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
            <path d="M3.6 9h16.8"></path>
            <path d="M3.6 15h16.8"></path>
            <path d="M11.5 3a17 17 0 0 0 0 18"></path>
            <path d="M12.5 3a17 17 0 0 1 0 18"></path>
          </svg>
        </a>
        <a
          href={github}
          target="_blank"
          className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-github"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
        </a>
        <a
          href={linkedin}
          target="_blank"
          className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-linkedin"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 11l0 5"></path>
            <path d="M8 8l0 .01"></path>
            <path d="M12 16l0 -5"></path>
            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
          </svg>
        </a>
        <a
          href={`mailto:${email}`}
          className="inline-block text-indigo-600 hover:text-indigo-400 dark:text-indigo-300 dark:hover:text-indigo-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mail"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
            <path d="M3 7l9 6l9 -6"></path>
          </svg>
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
      <section className="sectionA" id="team">
        <article className="max-w-6xl mx-auto flex flex-col justify-center gap-8 py-20">
          <h2 className="lp-para text-center uppercase text-large tracking-wide font-semibold text-gray-600 mb-2">
            Meet Team Willow
          </h2>
          <div  className="flex flex-col md:flex-row gap-2 md:gap-8 mx-auto">
            <Member
              name="Alex Bair"
              image="/img/team/Alex-Bair.png"
              location="Chapel Hill, NC"
              personalWebsite="https://www.alex-bair.com"
              github="https://github.com/Alex-Bair"
              linkedin="https://www.linkedin.com/in/alex-bair-a8a368a8/"
              email="alexbair143@gmail.com"
            />
            <Member
              name="Alex Bair"
              image="/img/team/Alex-Bair.png"
              location="Chapel Hill, NC"
              personalWebsite="https://www.alex-bair.com"
              github="https://github.com/Alex-Bair"
              linkedin="https://www.linkedin.com/in/alex-bair-a8a368a8/"
              email="alexbair143@gmail.com"
            />
            <Member
              name="Alex Bair"
              image="/img/team/Alex-Bair.png"
              location="Chapel Hill, NC"
              personalWebsite="https://www.alex-bair.com"
              github="https://github.com/Alex-Bair"
              linkedin="https://www.linkedin.com/in/alex-bair-a8a368a8/"
              email="alexbair143@gmail.com"
            />
            <Member
              name="Alex Bair"
              image="/img/team/Alex-Bair.png"
              location="Chapel Hill, NC"
              personalWebsite="https://www.alex-bair.com"
              github="https://github.com/Alex-Bair"
              linkedin="https://www.linkedin.com/in/alex-bair-a8a368a8/"
              email="alexbair143@gmail.com"
            />
          </div>
        </article>
      </section>
    </div>
  );
}
