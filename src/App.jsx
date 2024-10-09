import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Homepage from "./components/HomePage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, Routes } from "react-router-dom";
import UsersPage from "./components/Users";
import UserDetails from "./components/UserDetails";
import Form from "./components/Form";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
