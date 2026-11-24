

import {
    QueryClient,
    QueryClientProvider,
    useQuery
} from '@tanstack/react-query'

const queryClient = new QueryClient()


export default function App(){
    return(
      <QueryClientProvider client={queryClient} >
          <Exemplo />
      </QueryClientProvider>
    )
}

function Exemplo (){
  const {isPending, error, data} = useQuery({
    queryKey: ['TESTEAPI'],
    queryFn: async()=>{
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon/?limit=152'
      )
      if (!response) return Error("Erro inesperado")
        return response.json()
    }
    
  })
  if (isPending) return 'Loading'
  if (error) return "Erro inesperado2"
  console.log(data.results)
  const results = data.results
  return(
    <div className='container'>
      {results.map((index, key) => (
        <div key={key} className='content'>
          <div>
            <p>Nº</p>
            <div>
              <p>0{key}</p>
            </div>
          </div>
          <p >{index.name}</p>
        </div>
      ))}
    </div>
    )
} 