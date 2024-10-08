import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import Homepage from "./components/HomePage";


function App() {
  const queryClient = new QueryClient();

  return (
     <QueryClientProvider client={queryClient}>
      <Homepage />
     </QueryClientProvider>
  )
}

export default App
