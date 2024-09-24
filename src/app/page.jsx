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

  // const [cardsData, setCardsData] = useState([]);

  // useEffect(() => {
  //   const fetchCardsData = async () => {
  //     try {
  //       const response = await axios.get("URL_DA_SUA_API");
  //       setCardsData(response.data); // Assumindo que os dados estão no formato correto
  //     } catch (error) {
  //       console.error("Erro ao buscar os dados:", error);
  //     }
  //   };

  //   fetchCardsData();
  // }, []) ;

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
          <button className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 rounded-xl hover:text-white">
            <Image src={LogoHome} alt="home" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-2 text-lg">
              Home
            </h1>
          </button>
          <button className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 rounded-xl">
            <Image src={LogoMonitoramento} alt="monitoramento" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-2 text-lg">
              Monitoramento
            </h1>
          </button>
          <button className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 rounded-xl">
            <Image src={LogoConteudo} alt="conteudo" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-2 text-lg">
              Conteúdo
            </h1>
          </button>
          <button className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 rounded-xl">
            <Image src={LogoChat} alt="chat" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-2 text-lg">
              Chat
            </h1>
          </button>
          <button className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 rounded-xl">
            <Image src={LogoGaleria} alt="galeria" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-2 text-lg">
              Galeria
            </h1>
          </button>
          <button className="flex flex-row items-center p-2 gap-2 hover:bg-pink-degrade-1 rounded-xl">
            <Image src={LogoPerfil} alt="perfil" className="size-8" ></Image>
            <h1 className="font-Inter font-normal text-gray-2 text-lg">
              Perfil
            </h1>
          </button>
        </nav>
        {/* botão sair */}
        <button className="flex flex-row gap-2 items-center">
          <Image src={LogoLogout} alt="logout" className="size-8"></Image>
          <p className="font-Inter font-normal text-gray-2 text-lg">
            Log out
          </p>
        </button>
      </header>
      <main className="w-[80%] bg-white p-10">
        {/* conteúdo */}
        <div className="bg-gray-1 w-full h-full rounded-[40px] overflow-hidden">
          {/* degradê */}
          <div className="bg-pink-degrade-3 flex flex-row w-full h-28 justify-end rounded-s-[40px] rounded-e-[40px] overflow-hidden">
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
                <button>
                  <div className="flex flex-row items-center gap-2">
                    <Image src={LogoVerMais} alt="ver-mais" className="size-4"></Image>
                    <a className="font-Inter font-light text-base text-gray-3">Ver mais</a>
                  </div>
                </button>
              </div>
              {/* card */}
              <div className="flex flex-row gap-8">
                <div className="h-72 w-[500px] bg-white rounded-2xl shadow-lg aspect-video">
                  <div className="h-[80%] rounded-2xl bg-pink-300 ">
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
                <div className="h-72 w-[500px] bg-white rounded-2xl shadow-lg aspect-video">
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
                <button>
                  <div className="flex flex-row items-center gap-2">
                    <Image src={LogoVerMais} alt="ver-mais" className="size-4"></Image>
                    <a className="font-Inter font-light text-base text-gray-3">Ver mais</a>
                  </div>
                </button>
              </div>
              {/* card */}
              <div className="flex flex-row gap-8">
                <div className="h-72 w-[500px] bg-white rounded-2xl shadow-lg aspect-video">
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
                <div className="h-72 w-[500px] bg-white rounded-2xl shadow-lg aspect-video">
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
