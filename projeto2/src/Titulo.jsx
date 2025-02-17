import { useState } from "react";

function Titulo({nome, paragrafo, cor}){
    const [text, setText] =useState("Um título do estado inicial")
  //  let nome = "Rio de Janeiro";
     // const soma = 10+90;
      //const urlImg = "https://embratur.com.br/wp-content/uploads/2022/07/Embratur-Brasil-ultrapassa-marca-de-1-milhao-de-turistas-estrangeiros-recebidos-pela-primeira-vez-desde-2020-1.png"; 

      return (
        <div>
          <h1 style={{color:cor}}>Oi, eu sou {nome ? nome : "Fulaninho"}</h1>
          {paragrafo ? (
            <p>Lorem ipsum dolor, sit amet consectetur.</p>
          ) : (
            <p>NADA</p>
          )}
        </div>

      );
      
    }
export default Titulo






/*  return ( <div>
<h1>Oi, eu sou o {nome} </h1>
<img width={350} src={urlImg} alt="" />
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis aut excepturi labore amet incidunt molestias laborum quibusdam cumque mollitia corporis! Pariatur cupiditate neque voluptate impedit repellendus quo ipsam, cumque exercitationem.</p>
</div>
)


}

export default Titulo*/