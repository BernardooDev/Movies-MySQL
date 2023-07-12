import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/Pages/List.jsx";
import Home from "./components/Pages/Home.jsx";
import { createContext, useState } from "react";
import Favorites from "./components/Pages/Favorites.jsx";
import { QueryClient, QueryClientProvider } from "react-query"
export const FavoriteContext = createContext();


function App() {
  const [favorites, setFavorites] = useState([]);
  const queryClient = new QueryClient()
  return (
    <>
      <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
        </QueryClientProvider>
      </FavoriteContext.Provider>
    </>
  );
}

export default App;
