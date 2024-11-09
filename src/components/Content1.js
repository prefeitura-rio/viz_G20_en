import React, { useEffect, useRef, useState } from 'react';
import './Content1.css';
import MapComponent from './MapComponent';
import SvgMap from './SvgMap';
import * as d3 from 'd3';

const Content1 = ({ id }) => {
  const [chartType, setChartType] = useState('map'); // Default to 'map'
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);

  useEffect(() => {
    if (chartType === 'mapInfoBrazil') {
      d3.select(imgRef1.current)
        .transition()
        .duration(500) // 0.5 second fade-in duration
        .style('opacity', 1);
    } else if (chartType === 'mapInfoBrazil2') {
      d3.select(imgRef2.current)
        .transition()
        .duration(500) // 0.5 second fade-in duration
        .style('opacity', 1);
    } else if (chartType === 'mapRio2') {
      d3.select(imgRef3.current)
        .transition()
        .duration(500) // 0.5 second fade-in duration
        .style('opacity', 1);
    }
  }, [chartType]);

  return (
    <>
      <div className="content-section">
        <div className="text-card-map-intro">
          <div className="box-map-intro">
            <div className="desenvolvido-por">
              Desenvolvido em parceria pelo {" "}
              <a
                className="sem-estilo-link"
                href="https://www.dados.rio/"
                target="_blank"
                style={{ fontWeight: "bold" }}
                rel="noreferrer">
                {""}Escritório de Dados<br></br>
              </a> da Prefeitura da Cidade do Rio de Janeiro, SMDUE, e Comitê Rio G20
            </div>
            <br></br>
            <div style={{ width: "100px", border: "0.5px solid #949494" }}></div>
            <br></br>
            <br></br>
            <br></br>
            <h2>O amanhã está em pauta hoje. O <b>G20</b> (Grupo dos Vinte) é um <b>fórum internacional</b> que reúne as <b>19 maiores economias mundiais</b>, mais a União Europeia e a recém incorporada União Africana. Criado em 1999, o grupo nasceu como uma resposta a sucessivas crises econômicas mundiais, com a missão de promover a harmonia comercial entre as potências e a estabilidade financeira global. <br></br><br></br>
              Mas, com o tempo, o G20 passou a buscar respostas que vão além do crescimento e da segurança econômica. Hoje, ele se abre para temas urgentes que reverberam por todo o planeta: <b>mudanças climáticas, desigualdade social e governança global.</b> O que começou como um fórum de economistas, agora vê líderes discutindo também o meio ambiente e o futuro da humanidade.
              <br></br><br></br>
              Os encontros do G20 constituem uma <b>trilha de eventos</b> que incluem diversas reuniões ao longo do ano, envolvendo ministros da economia, representantes de bancos centrais e outros setores. A participação da <b>sociedade civil </b>cresce a cada ano, através de mecanismos como os Grupos de Engajamento, o G20 Social e eventos paralelos. O evento culmina na <b>Cúpula dos Líderes</b>, com a presença de <b>chefes de Estado</b>, onde os documentos e recomendações elaboradas ao longo do ano são entregues em suas mãos.
              <br></br><br></br>
              No centro dessas decisões globais, o <b>Rio de Janeiro</b> é a <b>sede oficial do G20</b> em 2024. Mas o que isso significa para a cidade? Mergulhe neste dataviz e explore o evento, seus números, seu impacto e legado para o Rio.
            </h2>
          </div>
        </div>
        <SvgMap chartType={chartType} />
        <MapComponent setChartType={setChartType} />

        {chartType === 'mapInfoBrazil' && (
          <img
            ref={imgRef1}
            className="special-image"
            style={{ opacity: 0 }} // Start with opacity 0
            src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/img1.png"
            alt="mapa1"
          />
        )}
        {chartType === 'mapInfoBrazil2' && (
          <img
            ref={imgRef2}
            className="special-image2"
            style={{ opacity: 0 }} // Start with opacity 0
            src="https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/img2.png"
            alt="mapa2"
          />
        )}
        {/* {chartType === 'mapRio2' && (
          <img
            ref={imgRef3}
            className="special-image3"
            style={{ opacity: 0 }} // Start with opacity 0
            src={map_rio}
            alt="mapa3"
          />
        )} */}
      </div>
    </>
  );
};

export default Content1;