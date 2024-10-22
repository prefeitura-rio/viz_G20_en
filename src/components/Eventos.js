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
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/foto2.png',
      "",
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/fotou20.png',
      '',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/fotobandeira.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/fotoindio.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/fotochanceleres.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/fotocupula.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/fotomam1.jpg',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/fotomam2.jpg',
    ];

    const mobileImages = [
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/foto1_mobile.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/foto2_mobile.png',
      "",
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/fotou20_mobile.png',
      '',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/fotobandeira_mobile.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/fotoindio_mobile.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/fotochanceleres_mobile.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/fotocupula_mobile.png',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/mam_1_mobile.jpg',
      'https://storage.googleapis.com/rj-escritorio-dev-public/dataviz/G20/scrollytelling/scrollytelling-mobile/mam_2_mobile.jpg'
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
      trigger: textRefs.current[4], // O terceiro card de texto
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
            <h2>O G20 no Rio: O Rio de Janeiro tem um longo histórico de sediar grandes eventos internacionais, como a Conferência das Nações Unidas sobre o Meio Ambiente e o Desenvolvimento em 1992 (Eco-92), a Conferência Rio+20 em 2012 e os Jogos Olímpicos de 2016 (confira outros eventos mundiais na cidade aqui nesse dataviz interativo).
            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[1] = el)}>
          <div className="box-eventos">
            <h2>
              Esses eventos deram experiência ao Rio como destino de debates globais, e a realização do G20 em seu solo consolida essa posição de relevância geopolítica da cidade como anfitriã do mundo.
            </h2>
          </div>
        </div>
        <div className="text-card-eventos3" ref={(el) => (textRefs.current[2] = el)}>
          <div className="box-eventos">
            <h2>O G20 no Rio de Janeiro mobilizou a cidade em uma escala significativa, transformando-a em um centro de debates globais e gerando números impressionantes:</h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[3] = el)}>
          <div className="box-eventos">
            <h2>Parte dos eventos são relativos aos Grupos de Engajamento, com participação ativa da sociedade civil. Um deles, o Urban 20 (U20), congrega cidades dos países membros do G20 para articular pautas de economia, clima e desenvolvimento urbano. O grupo culmina com a cúpula de prefeitos, liderada pelo nosso, Eduardo Paes.</h2>
          </div>
        </div>
        <div className="text-card-eventos-nobel" ref={(el) => (textRefs.current[4] = el)}>
          <div className="box-eventos">
            <h2>Durante o G20, a cidade recebeu seis laureados com o Prêmio Nobel. Em eventos distintos, esses especialistas palestraram e debateram temas globais cruciais, como inovação tecnológica, acordos internacionais de paz e desenvolvimento sustentável. A presença deles reforçou a importância do evento e colocou o Rio no centro das discussões sobre o futuro da humanidade.</h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[5] = el)}>
          <div className="box-eventos">
            <h2>O objetivo do G20 Social é ampliar a participação de atores não-governamentais nas atividades e nos processos decisórios do G20. O ponto alto do G20 Social será a Cúpula Social, entre os dias 14 e 16 de novembro de 2024.</h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[6] = el)}>
          <div className="box-eventos">
            <h2>São esperadas cerca de 50 mil pessoas, de todos os cantos do Brasil e do mundo, em um encontro com o povo e pelo povo, com respeito às autonomias de pauta e aos espaços autogestionados.</h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[7] = el)}>
          <div className="box-eventos">
            <h2>Na Reunião dos Chanceleres, os ministros de relações exteriores dos países membros do G20 (além dos chanceleres de outros países, convidados pelo Brasil) se reuniram para discutir, entre outros assuntos, o papel do G20 frente às tensões geopolíticas atuais, bem como a efetiva reforma da governança global.</h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[8] = el)}>
          <div className="box-eventos">
            <h2>Cúpula do G20 no Rio de Janeiro: A Cúpula representa a conclusão dos trabalhos conduzidos pelo país que ocupa a presidência rotativa do grupo. É o momento em que chefes de Estado e de Governo aprovam os acordos negociados ao longo do ano, e apontam caminhos para lidar com os desafios globais.</h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[9] = el)}>
          <div className="box-eventos">
            <h2>No Brasil, a Cúpula de Líderes do G20 está agendada para os dias 18 e 19 de novembro de 2024, no Rio de Janeiro. A Cúpula terá lugar num dos símbolos da cultura carioca: o Museu de Arte Moderna do Rio (MAM).</h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[10] = el)}>
          <div className="box-eventos">
            <h2>Em novembro de 2024, o mundo virá ao Rio. Líderes serão recebidos na icônica construção modernista, reinventada aos seus 75 anos, através de uma ampla reforma. Uma instituição cultural viva em um dos maiores parques urbanos do mundo representa um legado inestimável do G20 para o Rio.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
