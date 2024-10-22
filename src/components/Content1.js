import React, { useState } from 'react';
import './Content1.css';
import MapComponent from './MapComponent';
import SvgMap from './SvgMap';
import BrazilMap from './BrazilMap';
import RioMap from './RioMap';

const Content1 = ({ id }) => {
  const [chartType, setChartType] = useState('map'); // Default to 'map'

  return (
    <>
      <div className="content-section">
        <div className="text-card-map-intro">
          <div className="box-map-intro">
            <span className="desenvolvido-por">
              <h2>
                Desenvolvido pelo {" "}
                <a
                  className="sem-estilo-link"
                  href="https://www.dados.rio/"
                  target="_blank"
                  rel="noreferrer">
                  {""}Escritório de Dados<br></br>
                </a> da Prefeitura da Cidade do Rio de Janeiro
              </h2>
            </span>
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
        {(chartType === 'mapInfoBrazil' || chartType === 'mapInfoBrazil2') && <RioMap chartType={chartType} ></RioMap>}
      </div>
    </>
  );
};

export default Content1;