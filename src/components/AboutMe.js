const AboutMe = () => {
  return (
    <div>
      <h2 className="titleAboutMe">Sobre mí</h2>
      <p className="aboutMe">
        Durante mucho tiempo me esforcé por resaltar en trabajos de poco vuelo,
        eventualmente lo lograba pero sin embargo me fui dando cuenta que esos
        trabajos no me iban a ofrecer la estabilidad ni mucho menos el
        crecimiento al que pretendo alcanzar por eso es que decidí darle un
        cambio total a mi vida sumergiéndome de lleno en la programación,
        inicialmente empece como todos estudiando por mi cuenta, pero el
        verdadero cambio fue a comienzos del 2022 cuando realice el
        CodingBootcamp de
        <span>
          <button className="plataformaButton">
            <a href="https://www.plataforma5.la/ar/online" target="_blank">
              <img
                src="https://i.imgur.com/fapeAAP.png"
                className="plataforma5"
              />
            </a>
          </button>
        </span>
        de más de 800 hs. Allí en el Bootcamp siento que me forme con bases muy
        sólidas no solo sobre código si no en habilidades blandas y buenas
        prácticas, aún me queda mucho por aprender de forma profesional y
        personal, pero estoy muy emocionado por este nuevo camino y por todas
        las puertas que estoy seguro de que se van a abrir.
      </p>
    </div>
  );
};

export default AboutMe;
