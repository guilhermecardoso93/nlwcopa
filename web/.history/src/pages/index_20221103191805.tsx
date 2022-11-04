import Image from "next/image";
import Cellphone from "../assets/cellphones.png";
import Logo from "../assets/logo.svg";
import CheckIcon from "../assets/checkicon.png";
import Avatars from "../assets/avatares.png";
import { api } from "../lib/axios";

interface HomeProps {
  poolCount: number;
  guessesCount: number;
  userCount: number
}

export default function Home(props: HomeProps) {

  function createPool() {

  }

  return (
    <div className="max-w-[1124px] h-screen mt-10 mb-10 mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={Logo} alt="Logo NLW Copa" quality={100} />
        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>
        <div className="mt-10 flex items-center gap-2">
          <Image src={Avatars} alt="" quality={100} />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+{props.userCount}</span> pessoas já estão
            usando
          </strong>
        </div>

        <form onSubmit={createPool} className="flex mt-10 gap-2">
          <input
            className="flex-1 px-6 py-4 text-sm text-gray-100 rounded bg-gray-800 border border-gray-600"
            type="text"
            required
            placeholder="Qual nome do seu bolão?"
          />
          <button
            type="submit"
            className="px-6 py-4 text-sm rounded font-bold text-gray-900 bg-yellow-500 uppercase hover:bg-yellow-700"
          >
            Criar meu Bolão
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão você receberá um código único que poderá usar
          para convidar outras pessoas.
        </p>
        <div className="mt-10 pt-10 border-t border-gray-600 flex justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={CheckIcon} alt="" quality={100} />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">{props.poolCount}</span>
              <span> Bolões criados</span>
            </div>
          </div>
          <div className="w-px h-40[px] bg-gray-600"></div>
          <div className="flex items-center gap-6">
            <Image src={CheckIcon} alt="" quality={100} />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">{props.guessesCount}</span>
              <span> Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>
      <Image
        src={Cellphone}
        alt="Dois Celulares mostrando um preview da aplicação NLW Copa"
        quality={100}
      />
    </div>
  );
}

export const getServerSideProps = async () => {
  const [poolCountResponse, guessCountResponse, userCountResponse] = await Promise.all([
    api.get("pools/count"),
    api.get("guesses/count"),
    api.get('users/count')
  ]);

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessesCount: guessCountResponse.data.count,
      userCount: userCountResponse.data.count
    },
  };
};
