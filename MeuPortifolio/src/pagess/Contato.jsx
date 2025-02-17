import Menu from "./Menu";
const placeholders = ["Digite seu nome", "Digite seu e-mail","Digite sua mensagem"];

export default function Contato() {
  return (
    <div>
         <Menu />
      <h1>Tem uma pergunta ou proposta?
      Me envie uma mensagem! </h1>
      {placeholders.map((text, index) => (
        <input
          key={index}
          type="text"
          placeholder={text}
          style={{
            border: "none",
            borderBottom: "2px solid black",
            outline: "none",
            padding: "5px",
            width: "200px",
            fontSize: "14px",
            marginBottom: "10px",
            display: "block",
          }}
        />
      ))}
    </div>
  );
}




