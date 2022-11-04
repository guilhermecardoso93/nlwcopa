import Image from 'next/image';
import Cellphone from '../assets/cellphones.png';
import Logo from '../assets/logo.svg';


interface HomeProps {
  count: number
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <main>

      </main>
      <Image 
        src={Cellphone} 
        alt='Dois Celulares mostrando um preview da aplicação NLW Copa' 
        quality={100}/>
    </div>
  )
}


export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  return { 
    props: {
      count: data.count
    }
  }
}