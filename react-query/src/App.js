import axios from 'axios';
import { QueryClientProvider,QueryClient,useQuery, } from '@tanstack/react-query';


const axiosInstance = axios.create({
  baseURL: 'https://reqres.in',
});

const queryClient = new QueryClient();

function TestQuery(){
  const { data, error, isLoading } = useQuery({
    queryKey:['search'], 
    queryFn: async () => 
    {
    const { data } = await axiosInstance.get('/api/users/2')
    return data;
  },
})
  if(isLoading){
    return 'Loading...'
  }

  if(error){
    return 'Error: ' + error.message
  }

  return(
    <div key={data.data.id}>
      <h1>이름 : {data.data.first_name + ' ' +data.data.last_name}</h1>
      <p>이메일 : {data.data.email}</p>
      <img alt="face" src={data.data.avatar}/>
    </div>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TestQuery/>
    </QueryClientProvider>
  );
}




export default App;
