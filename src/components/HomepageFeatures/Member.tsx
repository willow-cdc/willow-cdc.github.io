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
      <p className="lp-name text-gray-800 dark:text-gray-300 text-lg font-semibold text-left mt-2 mb-0 p-override text-center pb-4 md:pb-0">
        {name}
      </p>
      <p className="lp-para text-gray-600 dark:text-gray-400  text-left mb-1 p-override text-center">
        {location}
      </p>
      <div className="flex gap-1 mx-auto mt-4">
        <a
          href={personalWebsite}
          target="_blank"
          className="inline-block text-willowGreen-600 hover:text-willowGreen-400 dark:text-willowGreen-300 dark:hover:text-willowGreen-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-world"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
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
          className="inline-block text-willowGreen-600 hover:text-willowGreen-400 dark:text-willowGreen-300 dark:hover:text-willowGreen-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-github"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
        </a>
        <a
          href={linkedin}
          target="_blank"
          className="inline-block text-willowGreen-600 hover:text-willowGreen-400 dark:text-willowGreen-300 dark:hover:text-willowGreen-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-linkedin"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
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
          className="inline-block text-willowGreen-600 hover:text-willowGreen-400 dark:text-willowGreen-300 dark:hover:text-willowGreen-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mail"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
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

export default Member;
