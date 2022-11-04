import Image from "next/image";
import Cellphone from "../assets/cellphones.png";
import Logo from "../assets/logo.svg";
import Avatars from "../assets/avatares.png";

interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <main>
        <Image src={Logo} alt="Logo NLW Copa" quality={100} />
        <h1>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>
        <div>        
          <Image src={Avatars} alt="sequecia de fotos de avatares" quality={100} />
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
