import React from 'react';
import "./Conclusao.css";
import Creditos from './Creditos';
const Conclusao = () => {
  return (
    <>
      <div className="conclusao-container">
        <div className="conclusao">
          <h2>
            Com o Rio de Janeiro como anfitrião, o G20 de 2024 se tornou um marco histórico, tanto para a cidade quanto para o Brasil. A cúpula elevou o país ao centro das discussões globais, reunindo líderes das maiores economias do mundo para debater questões fundamentais como desigualdade social, inovação tecnológica e a crise climática.  <br></br><br></br>
            Ao sediar um evento dessa magnitude, o Brasil não apenas fortalece sua posição diplomática no cenário internacional, mas também reafirma o papel do Rio de Janeiro como um destino estratégico e globalmente relevante para grandes eventos. Com uma infraestrutura robusta e a experiência de sediar encontros internacionais, a cidade maravilhosa consolida sua imagem de palco privilegiado para o diálogo sobre os desafios do futuro global, atraindo ainda mais visibilidade e investimentos no futuro.
          </h2>
        </div>

      </div>
      <div style={{ backgroundColor: "white", width: "100%", height: "100%" }}>
        <Creditos />
        {/* a */}
      </div>
    </>
  );
};

export default Conclusao;