
export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}


export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  return { 
    
  }
}