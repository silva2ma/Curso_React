import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";


function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

































/*import Titulo from "../src/Titulo.jsx";

function App() {
  return (
    <div>
      <Titulo cor="red" nome="o Anderson Rodrigues" paragrafo={true} />
      <Titulo cor="purple" nome="a Marcella Rodrigues" />
      <Titulo cor="blue" nome="o Rafael Guerra"/>
      <Titulo cor="green"/>
    </div>
  );
}

export default App;*/
