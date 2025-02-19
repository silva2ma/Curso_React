import Menu from "./Menu";
import minhaImagem from "./assets/FotoSobre.png"; // Importando a imagem



function Sobre(){
  return(
    <div>
         <Menu />
         <h1>Sobre</h1><hr></hr>
      <h1>E aí! Sou Marcella, uma entusiasta da tecnologia e do design</h1>
      <h2>Meu objetivo? Desenvolver experiências digitais que unam estética e funcionalidade</h2>
      <h3>✔ Desenvolver interfaces intuitivas e otimizadas <br></br>
          ✔ Programação, design, UX/UI e acessibilidade</h3>

<h2>Hard Skils</h2>
<h4>Habilidades técnicas</h4>
<ul>
  <li>Linguagens de Programação: HTML, CSS, JavaScript;</li>
  <li>Frameworks e Bibliotecas: React, Vue.js;</li>
  <li>Banco de Dados: MySQL;</li>
  <li>Ferramentas e Versionamento: Git, GitHub, Figma;</li>
  <li>Metodologias: Agile, Scrum, UX/UI Design.</li>
</ul>

<h2>Soft Skils</h2>
<h4>Competências pessoais</h4>
<ul>
  <li>Resolução de problemas – Capacidade de encontrar soluções eficientes;</li>
  <li>Trabalho em equipe – Boa comunicação e colaboração em projetos;</li>
  <li>Criatividade – Capacidade de pensar fora da caixa para soluções inovadoras;</li>
  <li>Autodidatismo – Sempre buscando aprender e evoluir;</li>
  <li>Gerenciamento de tempo – Organização para cumprir prazos e metas.</li>
</ul>

      <img src={minhaImagem} alt="Imagem ilustrativa" width="300" />
    </div>
  )
}

export default Sobre
















