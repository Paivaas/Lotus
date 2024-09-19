import Image from "next/image";
import logo from "../public/icons/utilities/lotus-icon.svg";
import conteudos from "../public/icons/nav/icon-conteudos.svg";
import galeria from "../public/icons/nav/galeria.svg";
import perfil from "../public/icons/nav/Ativo/perfil.svg";
import laranja from "../public/icons/nav/laranja.png"
import config from "../public/icons/utilities/settings-white.svg"
import edit from "../public/icons/utilities/edit.jpg"

export default function Home() {
  return (
    <div className="font-ABeeZee bg-white font-inter min-h-screen p-8 pb-20 flex gap-4">
      {/* Container para a navegação e a div cinza */}
      <div className="flex flex-col">
        <div className="inline-flex items-center mb-4">
          <Image src={logo} alt="logo" className="w-24 h-16" />
          <h1 className="text-pink-3 font-medium">Lotus</h1>
        </div>

        <button className="w-full">
          <div className="inline-flex items-center p-4 gap-4">
            <Image src={conteudos} alt="Conteúdos" className="w-9 h-11" />
            <h1 className="text-gray-2 font-medium">Conteúdos</h1>
          </div>
        </button>

        <button>
          <div className="inline-flex items-center p-4 gap-4">
            <Image src={galeria} alt="Galeria" className="w-9 h-16" />
            <h1 className="text-gray-2 font-medium">Galeria</h1>
          </div>
        </button>

        <button>
          <div className="inline-flex items-center p-4 gap-4">
            <Image src={perfil} alt="Perfil" className="w-9 h-16" />
            <h1 className="text-gray-2 font-medium">Perfil</h1>
          </div>
        </button>
      </div>

      
      <div className="bg-slate-50 flex-grow h-auto w-72 rounded-3xl">

      <div className="flex justify-center relative">
  <Image src={laranja} alt="Conteúdos" className="w-full h-24" />
  <Image src={config} alt="Perfil" className="absolute right-16 top-2 w-9 h-16" />
  <Image src={edit} alt="Editar" className="absolute right-4 top-2 w-10 h-10 rounded-full" />
</div>


    


      

      
      </div>
    </div>
  );
}
