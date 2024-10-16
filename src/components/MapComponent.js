import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MapComponent.css';

gsap.registerPlugin(ScrollTrigger);

const MapComponent = () => {

  return (
    <div className="map-container">
      {/* Scrolling text cards */}
      <div className="text-section">
        <div className="text-card">
          <div className="box">
            <h2>O amanhã está em pauta hoje. O G20 (Grupo dos Vinte) é um fórum internacional que reúne as 19 maiores economias mundiais, mais a União Europeia e a recém incorporada União Africana. Criado em 1999, o grupo nasceu como uma resposta a sucessivas crises econômicas mundiais, com a missão de promover a harmonia comercial entre as potências e a estabilidade financeira global.

              Mas, com o tempo, o G20 passou a buscar não apenas o crescimento e a segurança econômica; ele hoje se abre para temas urgentes que reverberam por todo o planeta: mudanças climáticas, desigualdade social e governança global. O que começou como um fórum de economistas, agora vê líderes discutindo também o meio ambiente e o futuro da humanidade.
              Os encontros do G20 incluem cúpulas anuais com chefes de Estado e reuniões ministeriais ao longo do ano, envolvendo ministros da economia, finanças e outros setores. A participação da sociedade civil cresce a cada ano, através de mecanismos como os Grupos de Engajamento, o G20 Social e eventos paralelos.
              No centro dessas decisões globais, o Rio de Janeiro é a sede oficial do G20 em 2024. Mas o que isso significa para a cidade? Mergulhe neste dataviz e explore o evento, seus números, seu impacto e legado para o Rio.
            </h2>
          </div>
        </div>
        <div className="text-card">
          <div className="box">
            <h2>O G20 é composto por 19 países, mais a União Europeia e a União Africana. Você sabe dizer quais são os países membros do grupo? Dica: são as maiores economias do mundo, e somente 5 ficam no Hemisfério Sul. Selecione os países no mapa:</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;