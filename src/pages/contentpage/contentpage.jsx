import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/icons/utilities/lotus-icon.svg"
import LogoVerMais from "../../public/icons/utilities/add-circle.svg"
import LogoLogout from "../../public/icons/nav/logout.svg"

// Navegção
import LogoHome from "../../public/icons/nav/home.svg"
import LogoMonitoramento from "../../public/icons/nav/monitoramento.svg"
import LogoConteudo from "../../public/icons/nav/conteudos.svg"
import LogoChat from "../../public/icons/nav/chat.svg"
import LogoGaleria from "../../public/icons/nav/galeria.svg"
import LogoPerfil from "../../public/icons/nav/profile.svg"


export default function Home() {
  return (
    <div className="flex h-screen">
      <header className="flex flex-col w-[20%] py-10 px-10">
        {/* lótus */}
        <div className="flex flex-row items-center gap-2 pb-40">
          <Image src={Logo} alt="logo" className="size-16"></Image>
          <h1 className="font-ABeeZee text-pink-3 font-light text-3xl text-center">
            Lótus
          </h1>
        </div>
        {/* navegação */}
        <nav className="flex flex-col gap-10 grow">
          <div className="flex flex-row items-center gap-2">
            <Image src={LogoHome} alt="home" className="size-12" ></Image>
            <h1 className="font-Inter font-normal text-gray-2 text-lg">
              Home
            </h1>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src={LogoMonitoramento} alt="monitoramento" className="size-12" ></Image>
            <h1 className="font-Inter font-normal text-gray-2 text-lg">
              Monitoramento
            </h1>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src={LogoConteudo} alt="conteudo" className="size-12" ></Image>
            <h1 className="font-Inter font-normal text-gray-2 text-lg">
              Conteúdo
            </h1>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src={LogoChat} alt="chat" className="size-12" ></Image>
            <h1 className="font-Inter font-normal text-gray-2 text-lg">
              Chat
            </h1>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src={LogoGaleria} alt="galeria" className="size-12" ></Image>
            <h1 className="font-Inter font-normal text-gray-2 text-lg">
              Galeria
            </h1>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image src={LogoPerfil} alt="perfil" className="size-12" ></Image>
            <h1 className="font-Inter font-normal text-gray-2 text-lg">
              Perfil
            </h1>
          </div>
        </nav>
        {/* botão sair */}
        <div className="flex flex-row gap-2 items-center">
          <Image src={LogoLogout} alt="logout" className="size-8"></Image>
          <p className="font-Inter font-normal text-gray-2 text-lg">
            Log out
          </p>
        </div>
      </header>
      <main className="grow bg-white p-10">
        {/* conteúdo */}
        <div className="bg-gray-1 w-full h-full rounded-[40px]">
          {/* degradê */}
          <div className="bg-pink-degrade-3 flex flex-row w-full h-28 justify-end rounded-s-[40px]">
            <div className="bg-pink-degrade-2 w-2/3 h-28 flex justify-end rounded-b-full">
              <div className="bg-pink-degrade-1 w-1/2 h-28 rounded-bl-full"></div> 
            </div> 
          </div>
          {/* título */}
          <div className="flex flex-col h-[10%] items-center justify-center gap-2">
            <h1 className="font-ABeeZee font-light text-gray-2 text-5xl">
              Conteúdos
            </h1>
            <div className="bg-gray-200 w-[70%] h-2 rounded-full"></div>
          </div>
          {/* cards */}
          <div className="h-[60%] flex flex-col justify-between gap-4 px-10">
            {/* 1ª fileira de cards */}
            <div className="flex flex-col gap-2">
              {/* cabeçalho */}
              <div className="flex flex-row w-full h-20 items-center justify-between">
                {/* subtítulo */}
                <h1 className="font-ABeeZee font-medium text-3xl text-gray-3 ">
                  Amamentação
                </h1>
                <div className="flex flex-row items-center gap-2">
                  <Image src={LogoVerMais} alt="ver-mais" className="size-4"></Image>
                  <a className="font-Inter font-light text-base text-gray-3">Ver mais</a>
                </div>
              </div>
              {/* card */}
              <div className="flex flex-row gap-8">
                <div className="h-72 w-[500px] bg-white rounded-2xl shadow-lg">
                  <div className="h-[80%] rounded-2xl bg-pink-300">
                    <div className="h-full w-full">
                      <Image></Image>          
                    </div>
                  </div>
                  {/* título do card */}
                  <p className="font-Inter font-medium text-xl text-gray-2 p-4">
                    Desvendando a Amamentação
                  </p>
                </div>
                {/* card */}
                <div className="h-72 w-[500px] bg-white rounded-2xl shadow-lg">
                  <div className="h-[80%] rounded-2xl bg-pink-300">
                    <div className="h-full w-full">
                      <Image></Image>
                    </div>
                  </div>
                  {/* título do card */}
                  <p className="font-Inter font-medium text-xl text-gray-2 p-4">
                    Desvendando a Amamentação
                  </p>
                </div>
                {/* card */}
                <div className="h-72 w-[500px] bg-white rounded-2xl shadow-lg">
                  <div className="h-[80%] rounded-2xl bg-pink-300">
                    <div className="h-full w-full">
                      <Image></Image>
                    </div>
                  </div>
                  {/* título do card */}
                  <p className="font-Inter font-medium text-xl text-gray-2 p-4">
                    Desvendando a Amamentação
                  </p>
                </div>
                {/* card */}
                <div className="h-72 w-[500px] bg-white rounded-2xl shadow-lg">
                  <div className="h-[80%] rounded-2xl bg-pink-300">
                    <div className="h-full w-full">
                      <Image></Image>
                    </div>
                  </div>
                  {/* título do card */}
                  <p className="font-Inter font-medium text-xl text-gray-2 p-4">
                    Desvendando a Amamentação
                  </p>
                </div>
              </div>
            </div>
            {/* 2ª fileira de cards */}
            <div className="flex flex-col gap-2">
              {/* cabeçalho */}
              <div className="flex flex-row w-full h-20 items-center justify-between">
                {/* subtítulo */}
                <h1 className="font-ABeeZee font-medium text-3xl text-gray-3 ">
                  Amamentação
                </h1>
                <div className="flex flex-row items-center gap-2">
                  <Image src={LogoVerMais} alt="ver-mais" className="size-4"></Image>
                  <a className="font-Inter font-light text-base text-gray-3">Ver mais</a>
                </div>
              </div>
              {/* card */}
              <div className="flex flex-row gap-8">
                <div className="h-72 w-[500px] bg-white rounded-2xl shadow-lg">
                  <div className="h-[80%] rounded-2xl bg-pink-300">
                    <div className="h-full w-full">
                      <Image></Image>
                    </div>
                  </div>
                  {/* título do card */}
                  <p className="font-Inter font-medium text-xl text-gray-2 p-4">
                    Desvendando a Amamentação
                  </p>
                </div>
                {/* card */}
                <div className="h-72 w-[500px] bg-white rounded-2xl shadow-lg">
                  <div className="h-[80%] rounded-2xl bg-pink-300">
                    <div className="h-full w-full">
                      <Image></Image>
                    </div>
                  </div>
                  {/* título do card */}
                  <p className="font-Inter font-medium text-xl text-gray-2 p-4">
                    Desvendando a Amamentação
                  </p>
                </div>
                {/* card */}
                <div className="h-72 w-[500px] bg-white rounded-2xl shadow-lg">
                  <div className="h-[80%] rounded-2xl bg-pink-300">
                    <div className="h-full w-full">
                      <Image></Image>
                    </div>
                  </div>
                  {/* título do card */}
                  <p className="font-Inter font-medium text-xl text-gray-2 p-4">
                    Desvendando a Amamentação
                  </p>
                </div>
                {/* card */}
                <div className="h-72 w-[500px] bg-white rounded-2xl shadow-lg">
                  <div className="h-[80%] rounded-2xl bg-pink-300">
                    <div className="h-full w-full">
                      <Image></Image>
                    </div>
                  </div>
                  {/* título do card */}
                  <p className="font-Inter font-medium text-xl text-gray-2 p-4">
                    Desvendando a Amamentação
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
