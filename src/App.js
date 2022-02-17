import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./composants/Header";
import Home from "./composants/Home";
import Movie from "./composants/Movie";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;