import Image from 'next/image';
import Cellphone from '../assets/cellphones.png';
interface HomeProps {
  count: number
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <main></main>
      <Image src={Cellphone} alt=''/>
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