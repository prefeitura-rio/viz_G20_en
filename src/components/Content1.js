import React, { useState } from 'react';
import './Content1.css';
import MapComponent from './MapComponent';
import SvgMap from './SvgMap';
import map_rio from '../assets/map_rio.png'
import mapa1 from '../assets/mapa1.png'
import mapa2 from '../assets/mapa2.png'
const Content1 = ({ id }) => {
  const [chartType, setChartType] = useState('map'); // Default to 'map'

  return (
    <>
      <div className="content-section">
        <div className="text-card-map-intro">
          <div className="box-map-intro">
            <span className="desenvolvido-por">
              <h2 style={{ fontSize: "0.9rem" }}>
                Desenvolvido pelo {" "}
                <a
                  className="sem-estilo-link"
                  href="https://www.dados.rio/"
                  target="_blank"
                  style={{ fontWeight: "bold", fontSize: "0.9rem" }}
                  rel="noreferrer">

                  {""}Escritório de Dados<br></br>
                </a> da Prefeitura da Cidade do Rio de Janeiro
              </h2>
            </span>
            <br></br>

            <div style={{ width: "100px", border: "1px solid #949494" }}></div>
            <br></br>
            <br></br>
            <br></br>
            <h2>O amanhã está em pauta hoje. O G20 (Grupo dos Vinte) é um fórum internacional que reúne as 19 maiores economias mundiais, mais a União Europeia e a recém incorporada União Africana. Criado em 1999, o grupo nasceu como uma resposta a sucessivas crises econômicas mundiais, com a missão de promover a harmonia comercial entre as potências e a estabilidade financeira global.<br></br><br></br>
              Mas, com o tempo, o G20 passou a buscar não apenas o crescimento e a segurança econômica; ele hoje se abre para temas urgentes que reverberam por todo o planeta: mudanças climáticas, desigualdade social e governança global. O que começou como um fórum de economistas, agora vê líderes discutindo também o meio ambiente e o futuro da humanidade.
              <br></br><br></br>
              Os encontros do G20 incluem cúpulas anuais com chefes de Estado e reuniões ministeriais ao longo do ano, envolvendo ministros da economia, finanças e outros setores. A participação da sociedade civil cresce a cada ano, através de mecanismos como os Grupos de Engajamento, o G20 Social e eventos paralelos.
              No centro dessas decisões globais, o Rio de Janeiro é a sede oficial do G20 em 2024. Mas o que isso significa para a cidade?
              <br></br><br></br>
              Mergulhe neste dataviz e explore o evento, seus números, seu impacto e legado para o Rio.
            </h2>
          </div>
        </div>
        <SvgMap chartType={chartType} />
        <MapComponent setChartType={setChartType} />

        {chartType === 'mapInfoBrazil' && <img
          className="special-image"
          style={{ opacity: chartType === 'mapInfoBrazil' ? 1 : 0 }}
          src={map_rio}
          alt="mapa1"
        />}
        {chartType === 'mapInfoBrazil2' && <img
          className="special-image2"
          style={{ opacity: chartType === 'mapInfoBrazil2' ? 1 : 0 }}
          src={mapa1}
          alt="mapa2"
        />}
        {chartType === 'mapRio2' && <img
          className="special-image3"
          style={{ opacity: chartType === 'mapRio2' ? 1 : 0 }}
          src={map_rio}
          alt="mapa3"
        />}
      </div>
    </>
  );
};

export default Content1;