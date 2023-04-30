import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slide from "../components/Slide";
import SquigglyLines from "../components/SquigglyLines";
import { Technologies } from "../components/Technologies";


const Home  = () => {

  const defaultImages1 = [
    "/data-center-1.svg",
    "/data-center-2.jpg",
    "/data-center-3.jpg",
    "/data-center-1.svg"
  ];

  const defaultImages2 = [
    "/bitso.png",
    "/bitso-1.png",
    "/wegoatyou.png",
    "/wegoatyou-1.png",
    "/wegoatyou-2.png",
    "/artcrypted.png",
    "/artcrypted-1.png",
    "/artcrypted-2.png",
    "/elclasicodemexico.png",
    "/elclasicodemexico-1.png"
  ];

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>RoomGPT</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <div>
          <img className="w-full object-cover h-96 rounded-2xl" src="/avatar.jpg" />
        </div>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Erick Roney Benitez Cruz{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">Software Developer</span>
          </span>
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Soy graduado en Ingeniería en Sistemas Computaciones y actualmente me desempeño como 
          desarrollador FrontEnd con conocimientos UI y UX, Web3.js y blockchain. 
          Así también cuento con conocimiento y experiencia en el área de Infraestructura 
          tecnológica como ambientes virtualizados (VMWARE,VirtualBox), Redes, Gestión de 
          servicios de dominio & Directorio activo, entre otros.
          Cuento con algunas certificaciones como, Blockchain ,UI & UX interfaces y MicrosoftAzure
          Siempre he destacado por mi entusiasmo al momento de participar en diferentes proyectos,
          aprendizaje continuo y resiliencia.
        </h2>
        <h3
          className=" text-white font-medium px-4 py-3 sm:mt-10 mt-8 transition"
        >
          Experiencia en
        </h3>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div className="flex-1">
                <h3 className="mb-1 font-medium text-lg">Ingeniero de Infraestructura</h3>
                <Slide 
                  images={defaultImages1}
                />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 font-medium text-lg">Desarrollo web (FrontEnd)</h3>
                <Slide 
                  images={defaultImages2}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Technologies />
      <Footer />
    </div>
  );
};

export default Home;
