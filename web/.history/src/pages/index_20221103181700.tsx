import Image from "next/image";
import Cellphone from "../assets/cellphones.png";
import Logo from "../assets/logo.svg";
import CheckIcon from "../assets/checkicon.png";
import Avatars from "../assets/avatares.png";

interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center">
      <main>
        <Image src={Logo} alt="Logo NLW Copa" quality={100} />
        <h1 className='mt-14 text-white text-5xl font-bold leading-tight'>
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>
        <div className='mt-10 flex items-center gap-2'>
          <Image src={Avatars} alt="" quality={100} />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.592</span> pessoas já estão usando
          </strong>
        </div>

        <form>
          <input type="text" required placeholder="Qual nome do seu bolão?" />
          <button type="submit">Criar meu Bolão</button>
        </form>
        <p>
          Após criar seu bolão você receberá um código único que poderá usar
          para convidar outras pessoas.
        </p>
        <div>
          <Image src={CheckIcon} alt="" quality={100} />
          <div>
            <span>+2.304</span>
            <span>Bolões criados</span>
          </div>
        </div>
        <div>
          <Image src={CheckIcon} alt="" quality={100} />
          <div>
            <span>+2.304</span>
            <span>Bolões criados</span>
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
  const response = await fetch("http://localhost:3333/pools/count");
  const data = await response.json();

  return {
    props: {
      count: data.count,
    },
  };
};
