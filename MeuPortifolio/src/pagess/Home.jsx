import Menu from "./Menu";
import minhaImagem from "./assets/FotoHome.png"; // Importando a imagem


function Home() {
  return (
    <div>
      <Menu  /> 
      <h1>Olá, bem-vindo ao mundo da Marcella</h1>
      <h2>Desenvolvendo ideias, construindo experiências</h2>
      <img src={minhaImagem} alt="Imagem ilustrativa" width="300" />
    </div>
  );
}

export default Home;
