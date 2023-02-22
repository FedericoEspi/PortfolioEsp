import React from "react";
import "./styles/index.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import dfoto from "./styles/img/FedericoEzeP5.png";
import desing from "./styles/img/desing.png";
import code from "./styles/img/code.png";
import consulting from "./styles/img/consulting.png";
import web1 from "./styles/img/web1.png";
import web2 from "./styles/img/web2.jpg";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <header className="App-header">
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </header>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyed</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl "
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-orange-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-orange-600 font-medium md:text-6xl">
              Federico Ezequiel Espiñeyra
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Full stack developer graduated from the Platform 5 bootcamp and
              future Systems graduate at the Universidad Nacional de Quilmes,
              simultaneously studying English at "BAC The British-American
              College"
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillInstagram />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-orange-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <img src={dfoto} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">main technologies</h3>
            <p className="text-md py-2 leading-8 text-gray-80">
              All the technologies that I learned to handle in the bootcamp are
              NodeJS / ReactJS / JavaScript / Express / MongoDB / Sequelize /
              Axios / Redux / Bootstrap / CSS / Docker but I am always open to
              learning about and implementing new ones, as in the case of this
              portfolio in the which one uses tailwind.
            </p>
          </div>
          <div className="lg:flex gap-10 text-center">
            <div className=" shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <img src={desing} className="mx-auto" width={100} height={100} />
              <h3 className="text-lg front-medium pt-8 pb-2">Qualities</h3>
              <p>
                I promise to find the best solution to every problem or
                challenge that comes my way.
              </p>
              <br />
              <p>
                I intervene by contributing ideas and knowledge with the aim of
                achieving a common goal.
              </p>
              <br />
              <p>
                I have a good predisposition to face projects and I promise to
                follow it until it is finished.
              </p>
              <br />
              <p>
                I make plans and identify the key points to achieve success.
              </p>
              <br />
              <p>
                I have the ability to learn autonomously through digital media.
              </p>

            </div>

            <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <img
                src={consulting}
                className="mx-auto"
                width={100}
                height={100}
              />
              <h3 className="text-lg front-medium pt-8 pb-2">Let's contact</h3>
              <p>Telephone: (+54)1158437179</p>
              <br />
              <p>Email: FedericoEzequiel.e@hotmail.com</p>
              <br />
              <p>Gmail: FedeEzequiel.e@gmail.com</p>
              <br />
              <p>
                Adress: Las Flores 1600 Torre 47 piso 8 dpro A cp: 1875 (wilde,
                Avellaneda, Buenos Aires)
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
