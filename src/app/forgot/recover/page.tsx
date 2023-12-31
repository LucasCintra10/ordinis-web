import Image from "next/image";
import * as Icons from "@heroicons/react/24/outline";
import Link from "next/link";

export default function RecoverPage() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Image src="/vector9.svg" alt="Ilustração" width={300} height={300} className="absolute top-0 right-0" />
      <Image src="/vector10.svg" alt="Ilustração" width={300} height={300} className="absolute bottom-0 left-0" />

      <div className="w-500 h-500 relative bg-c4 rounded-2xl flex flex-col  items-center   ">
        <div className="flex flex-col justify-center items-center my-8 ">
          <Image src="/logo.svg" alt="Logo" width={100} height={95} />
          <Image src="/ordinis.svg" alt="Ordinis" width={167} height={27} />
        </div>
        <form className="w-96 flex flex-col items-center gap-6">
          <h2 className="text-c1">Informe a nova senha</h2>
          <input
            type="password"
            placeholder="Informe sua nova senha"
            className="w-full h-12 rounded p-2 box-border outline-none transition-transform focus:scale-105"
          />
          <input
            type="password"
            placeholder="Confirme sua nova senha"
            className="w-full h-12 rounded p-2 box-border outline-none transition-transform focus:scale-105"
          />
          <button className="w-full h-12 rounded bg-p3 bg-no-repeat bg-cover text-white font-bold text-xl">
            Redefinir senha
          </button>
        </form>
      </div>
    </main>
  );
}
