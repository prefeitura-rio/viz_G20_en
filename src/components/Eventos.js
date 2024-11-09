import React, { useEffect, useRef, useContext, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Eventos.css';
import { CurrentComponentContext } from '../CurrentComponentContext';
import BigNumbers from './BigNumbers';
import NobelGrid from './NobelGrid';

gsap.registerPlugin(ScrollTrigger);

const Eventos = (props) => {
  const { currentComponent } = useContext(CurrentComponentContext);
  const containerRef = useRef(null);
  const [imageSources, setImageSources] = useState([]);
  const bigNumbersRef = useRef(null);
  const nobelGridRef = useRef(null);
  const [bigNumbersOpacity, setBigNumbersOpacity] = useState(0);
  const [nobelGridOpacity, setNobelGridOpacity] = useState(0);

  useEffect(() => {
    const desktopImages = [
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/foto1.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/foto2_r01.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/fotomam1_r01.jpg',
      "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/card17.png",
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/card18.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/card19.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/card20.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/card21.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/card22.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/card23.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/card24.png',
      '',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/card26.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/fotocupula.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/card28_r01.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/card29_r01.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/card30_r01.png',
    ];

    const mobileImages = [
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/foto1_mobile.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/foto2_mobile_r01.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/mam_1_mobile_r01.jpg',
      "https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/card17_mobile.png",
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/card18_mobile.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/card19_mobile.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/card20_mobile.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/card21_mobile.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/card22_mobile.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/card23_mobile.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/card24_mobile.png',
      '',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/card26_mobile.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/fotocupula.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/card28_mobile_r01.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/card29_mobile_r01.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/card30_mobile_r01.png',
    ];

    // Function to update image sources based on screen size
    const updateImageSources = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setImageSources(mobileImages);
      } else {
        setImageSources(desktopImages);
      }
    };

    // Initial call
    updateImageSources();

    // Add event listener for resize
    window.addEventListener('resize', updateImageSources);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateImageSources);
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: textRefs.current[2], // O terceiro card de texto
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        gsap.to(bigNumbersRef.current, { opacity: 1, duration: 1, onComplete: () => setBigNumbersOpacity(1) });
      },
      onLeave: () => {
        gsap.to(bigNumbersRef.current, { opacity: 0, duration: 1, onComplete: () => setBigNumbersOpacity(0) });
      },
      onEnterBack: () => {
        gsap.to(bigNumbersRef.current, { opacity: 1, duration: 1, onComplete: () => setBigNumbersOpacity(1) });
      },
      onLeaveBack: () => {
        gsap.to(bigNumbersRef.current, { opacity: 0, duration: 1, onComplete: () => setBigNumbersOpacity(0) });
      },
    });
  }, []);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: textRefs.current[11], // O terceiro card de texto
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        gsap.to(nobelGridRef.current, { opacity: 1, duration: 1, onComplete: () => setNobelGridOpacity(1) });
      },
      onLeave: () => {
        gsap.to(nobelGridRef.current, { opacity: 0, duration: 1, onComplete: () => setNobelGridOpacity(0) });
      },
      onEnterBack: () => {
        gsap.to(nobelGridRef.current, { opacity: 1, duration: 1, onComplete: () => setNobelGridOpacity(1) });
      },
      onLeaveBack: () => {
        gsap.to(nobelGridRef.current, { opacity: 0, duration: 1, onComplete: () => setNobelGridOpacity(0) });
      },
    });
  }, []);

  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const images = imageRefs.current;
    const texts = textRefs.current;

    images.forEach((image, index) => {
      gsap.fromTo(
        image,
        { opacity: index === 0 && currentComponent === "Eventos" ? 1 : 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: texts[index],
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, [currentComponent]);

  return (
    <div {...props} ref={containerRef} className="eventos-container">
      <div className="image-container">
        {imageSources.map((src, index) => (
          <img
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            className="background-image"
            src={src}
            alt={`Imagem ${index + 1}`}
            style={{ display: index === 13 ? 'none' : 'block' }}
          />
        ))}
      </div>
      <div className="image-container">
        <div ref={bigNumbersRef} style={{ opacity: 0 }}>
          <BigNumbers opacity={bigNumbersOpacity} />
        </div>
      </div>
      <div className="image-container">
        <div ref={nobelGridRef} style={{ opacity: 0 }}>
          <NobelGrid opacity={nobelGridOpacity} />
        </div>
      </div>

      {/* Text Cards */}
      <div className="text-section">
        <div className="text-card-eventos" ref={(el) => (textRefs.current[0] = el)}>
          <div className="box-eventos">
            <h2>O Rio de Janeiro tem um longo histórico de sediar grandes eventos internacionais, como a Conferência das Nações Unidas sobre o Meio Ambiente e o Desenvolvimento (Eco-92), a Conferência Rio+20, em 2012, e os Jogos Olímpicos de 2016  (confira outros eventos mundiais na cidade <a href="https://prefeitura-rio.github.io/G20Dataviz/" style={{ color: "inherit" }} target="_blank"><strong>aqui</strong></a> nesse dataviz interativo).
            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[1] = el)}>
          <div className="box-eventos">
            <h2>
              Esses eventos deram <b>experiência</b> ao Rio como destino de debates globais. A realização do G20 em seu solo consolida essa posição de <b>relevância geopolítica</b> da cidade como <b>anfitriã do mundo</b>.
            </h2>
          </div>
        </div>
        <div className="text-card-eventos3" ref={(el) => (textRefs.current[2] = el)}>
          <div className="box-eventos">
            <h2>O G20 no Rio de Janeiro é <b>pioneiro</b> em muitos sentidos. O evento dá destaque para parcelas da sociedade com pouca participação histórica no G20: <b>a sociedade civil</b> e <b>instituições não-governamentais</b> têm na cidade canais inéditos de participação, sentando à mesa para debater e contribuir junto a representantes e instituições oficiais. Ao convidar mais pessoas e organizações para a discussão, o evento <b>mobilizou a cidade</b> em uma escala significativa, transformando-a em um centro de debates globais e gerando números impressionantes:
            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[3] = el)}>
          <div className="box-eventos">
            <h2>Uma das conquistas do Rio, o <b>G20 Social</b> é uma <b>realização inédita</b>, que tem na cidade maravilhosa seu palco de estreia. O evento foi anunciado pelo presidente Lula na 18ª Cúpula de Chefes de Governo e Estado do G20, em Nova Délhi, na Índia, quando o Brasil assumiu simbolicamente a presidência do bloco. </h2>
          </div>
        </div>
        <div className="text-card-eventos-nobel" ref={(el) => (textRefs.current[4] = el)}>
          <div className="box-eventos">
            <h2>O objetivo do G20 Social é ampliar a participação de atores não-governamentais nas atividades e nos processos decisórios do G20, principalmente através dos <b>Grupos de Engajamento</b>. Além disso, o evento inclui pela primeira vez encontros entre os grupos e as trilhas política (Trilha de Sherpas) e financeira (Trilha de Finanças). O ponto alto do G20 Social será a <b>Cúpula Social</b>, entre os dias 14 e 16 de novembro de 2024. </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[5] = el)}>
          <div className="box-eventos">
            <h2>São esperadas cerca de <b>50 mil pessoas</b>, de todos os cantos do Brasil e do mundo, em um encontro com o povo e pelo povo, com respeito às autonomias de pauta e aos espaços autogestionados. A expectativa é que as colaborações da sociedade civil sejam analisadas e, no que couber e houver consenso, incorporadas à <b>Declaração de Líderes</b>.
            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[6] = el)}>
          <div className="box-eventos">
            <h2>Os <b>Grupos de Engajamento</b> são parte importante do G20 e têm participação ativa da sociedade civil. Um deles, o <b>Urban 20</b> (U20), tem grande importância no cenário carioca do evento. Ele congrega as 40 maiores cidades dos países membros para articular pautas de economia, clima e desenvolvimento urbano em 76 sessões e 63 horas de programação. </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[7] = el)}>
          <div className="box-eventos">
            <h2>O grupo culmina com a <b>cúpula de prefeitos</b>, liderada pelo nosso, Eduardo Paes, em um encontro onde são esperados cerca de 100 prefeitos. O principal resultado será o Comunicado do U20, que será aprovado pelos prefeitos e entregue ao G20 em novembro de 2024. É o Rio dando <b>destaque para a gestão das cidades</b>, e recebendo de volta essa visibilidade através de nossa Prefeitura.</h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[8] = el)}>
          <div className="box-eventos">
            <h2>O <b>G20 Favelas</b> é uma iniciativa inovadora, criada pela presidência brasileira do evento e destacada pela organização carioca, que visa não apenas dar voz às questões enfrentadas pelas favelas, mas também promover <b>soluções colaborativas e inclusivas</b> para desafios globais. Ao ouvir e integrar as experiências e propostas das favelas, o G20 Favelas contribui para um <b>futuro mais sustentável e igualitário</b> para todos.</h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[9] = el)}>
          <div className="box-eventos">
            <h2>De acordo com o Instituto Data Favela, as favelas brasileiras movimentam cerca de 202 bilhões de reais por ano, demonstrando seu <b>potencial econômico</b> e a força empreendedora e produtiva de seus moradores. Este é apenas um indício de como a inclusão das populações das favelas na construção de políticas públicas é essencial para combater a fome e a pobreza no Brasil.
            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[10] = el)}>
          <div className="box-eventos">
            <h2>Estreando em solo carioca sob a presidência brasileira do G20, o <b>Oceans 20 </b>(O20) é outro grupo de trabalho que <b>surge oficialmente no Rio</b>. A criação do Oceans 20 é um <b>marco histórico</b> no reconhecimento do <b>papel central do oceano</b> nas agendas globais de clima, energia e meio ambiente e que, apesar de ser um ecossistema global e interconectado, é plural em suas características. O grupo tem um papel crucial em dar <b>voz à sociedade civil</b>, representada em organizações não governamentais, iniciativas privadas, povos indígenas, comunidades tradicionais e cientistas, para que as diferentes questões que permeiam o oceano possam ser debatidas.

            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[11] = el)}>
          <div className="box-eventos">
            <h2>Durante o G20, a cidade recebeu seis laureados com o <b>Prêmio Nobel</b>. Em eventos distintos, esses especialistas palestraram e debateram temas globais cruciais, como inovação tecnológica, acordos internacionais de paz e desenvolvimento sustentável. A presença deles reforçou a importância do evento e colocou o Rio no centro das discussões sobre o <b>futuro da humanidade</b>. Eventos e presenças como essas, junto com documentos elaborados nos encontros, são parte do <b>legado intelectual</b> do G20 para o Rio.

            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[12] = el)}>
          <div className="box-eventos">
            <h2>Na <b>Reunião dos Chanceleres</b>, os ministros de relações exteriores dos países membros do G20 (além dos chanceleres de outros países, convidados pelo Brasil) se reuniram para discutir, entre outros assuntos, o papel do G20 frente às tensões geopolíticas atuais, bem como a efetiva <b>reforma da governança global</b>.
            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[13] = el)}>
          <div className="box-eventos">
            <h2><b>Cúpula do G20 no Rio de Janeiro:</b> A Cúpula representa a conclusão dos trabalhos conduzidos pelo país que ocupa a presidência rotativa do grupo. É o momento em que <b>chefes de Estado e de Governo</b> aprovam os acordos negociados ao longo do ano, e apontam caminhos para lidar com os desafios globais.

            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[14] = el)}>
          <div className="box-eventos">
            <h2>No Brasil, a Cúpula de Líderes do G20 está agendada para os dias 18 e 19 de novembro de 2024, no Rio de Janeiro. A Cúpula terá lugar num dos símbolos da cultura carioca: o <b>Museu de Arte Moderna do Rio</b> (MAM).

            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[15] = el)}>
          <div className="box-eventos">
            <h2>Em novembro de 2024, o mundo virá ao Rio. Líderes serão recebidos na icônica construção modernista, reinventada aos seus 75 anos, através de uma <b>ampla reforma.</b> Uma instituição cultural viva em um dos maiores parques urbanos do mundo representa um <b>legado inestimável do G20 para o Rio</b>.
            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[16] = el)}>
          <div className="box-eventos">
            <h2>A escolha do MAM para o encontro possibilitou à Prefeitura do Rio realizar uma <b>revitalização de mais de 100 mil m²</b>. Com um investimento de R$32 milhões, as obras contaram com reformas nas áreas internas do museu e a revitalização do entorno, incluindo a recomposição do paisagismo de Burle Marx. O projeto contemplou a modernização do Bloco de Exposições, a <b>renovação do Bloco Escola</b>, a instalação de nova iluminação nas áreas externas, a criação de um passeio público e a valorização dos Jardins do MAM. Após o G20, o <b>MAM reabrirá ao público</b>, com novos espaços de lazer, educação e arte, além de uma programação renovada.  Assim, o G20 entrega um legado físico ao Rio, que se soma ao amplo legado intelectual proporcionado pelo evento.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
