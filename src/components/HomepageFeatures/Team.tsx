import Member from "./Member";

const Team = () => {
  return (
    <section className="sectionB" id="team">
      <article className="max-w-6xl mx-auto flex flex-col justify-center gap-8 py-20 px-6">
        <h2 className="lp-para text-center text-3xl tracking-wide font-semibold text-gray-600 dark:text-gray-300 mb-2">
          Meet Team Willow
        </h2>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 mx-auto">
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
            name="Arno Cai"
            image="/img/team/arno-cai.png"
            location="Boston, MA"
            personalWebsite="https://www.arnocai.com/"
            github="https://github.com/acai777"
            linkedin="https://www.linkedin.com/in/arno-cai/"
            email="acai367@gmail.com"
          />
          <Member
            name="Cameron Bibb"
            image="/img/team/cameron-bibb.png"
            location="Lexington, KY"
            personalWebsite="https://www.cameronbibb.com"
            github="https://github.com/cameronbibb"
            linkedin="https://www.linkedin.com/in/cameron-bibb-123656106"
            email="cameron.bibb@gmail.com"
          />
          <Member
            name="Alessio Novi"
            image="/img/team/alessioNovi.png"
            location="Genova, IT"
            personalWebsite="https://alessionovi.github.io/"
            github="https://github.com/AlessioNovi"
            linkedin="https://www.linkedin.com/in/alessio-novi-00a89627/"
            email="alessionovi147@gmail.com"
          />
        </div>
      </article>
    </section>
  );
};

export default Team;
