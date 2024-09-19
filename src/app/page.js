import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-ABeeZee bg-red-degrade-1 font-inter grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">


      <h1 className="font-ABeeZee">
        testandoooo uuu
      </h1>
      <nav className="flex flex-col">

          <Link href="/teste1">Teste1</Link>
          <Link href="/login">Teste1</Link>
          <Link href="/teste1">Teste1</Link>
      </nav>
      
    </div>
  );
}
