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
            <h2>Rio de Janeiro has a long history of hosting major international events, such as the United Nations Conference on Environment and Development in 1992 (Eco-92), the Rio+20 Conference in 2012, and the 2016 Olympic Games (check out other global events in the city in this interactive dataviz).

            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[1] = el)}>
          <div className="box-eventos">
            <h2>
              These events have given Rio <b>experience</b> as a destination for global debates. Hosting the G20 on its soil solidifies the city’s <b>geopolitical relevance</b> as a <b>host for the world</b>.

            </h2>
          </div>
        </div>
        <div className="text-card-eventos3" ref={(el) => (textRefs.current[2] = el)}>
          <div className="box-eventos">
            <h2>The G20 in Rio de Janeiro is <b>groundbreaking</b> in many ways. The event highlights segments of society with little historical participation in the G20: <b>civil society and non-governmental institutions</b> now have new channels of participation in the city, sitting at the table to discuss and contribute alongside representatives and official institutions. By inviting more people and organizations into the discussion, the event has mobilized the city on a significant scale, transforming it into a center of global debates and generating impressive numbers:

            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[3] = el)}>
          <div className="box-eventos">
            <h2>One of the achievements of the G20 in Rio, the <b>G20 Social</b> is a <b>groundbreaking event</b>, with Rio de Janeiro as its debut stage. The event was announced by President Lula at the 18th G20 Summit of Heads of Government and State in New Delhi, India, when Brazil symbolically took over the presidency of the bloc. </h2>
          </div>
        </div>
        <div className="text-card-eventos-nobel" ref={(el) => (textRefs.current[4] = el)}>
          <div className="box-eventos">
            <h2>The goal of the G20 Social is to increase the participation of non-governmental actors in the G20's activities and decision-making processes, primarily through the <b>Engagement Groups</b>.  Additionally, for the first time, the event includes meetings between these groups and the political (Sherpa) and financial (Finance) tracks. The highlight of the G20 Social will be the <b>Social Summit</b>, held from November 14 to 16, 2024.
            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[5] = el)}>
          <div className="box-eventos">
            <h2>Around <b>50,000 people</b> are expected, from all corners of Brazil and the world, in a gathering with and for the people, with respect for agenda autonomies and self-managed spaces. The expectation is that civil society’s contributions will be analyzed and, where applicable and with consensus, incorporated into the <b>Leaders’ Declaration</b>.
            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[6] = el)}>
          <div className="box-eventos">
            <h2>The <b>Engagement Groups</b> are an important part of the G20 and have active participation from civil society. One of them, <b>Urban 20</b> (U20), holds significant importance in the Rio de Janeiro context of the event. It brings together the 40 largest cities of G20 member countries to discuss agendas related to the economy, climate, and urban development in 76 sessions and 63 hours of programming. </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[7] = el)}>
          <div className="box-eventos">
            <h2>The group culminates with the <b>mayors' summit</b>, led by Rio's mayor, Eduardo Paes, in a meeting where around 100 mayors are expected. The main outcome will be the U20 Communiqué, which will be approved by the mayors and delivered to the G20 in November 2024. This highlights Rio’s <b>focus on city management</b>, while receiving this visibility through our city government.
            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[8] = el)}>
          <div className="box-eventos">
            <h2>The <b>G20 Favelas</b> is an innovative initiative created by the Brazilian presidency of the event and highlighted by the local organization in Rio, aiming not only to give a voice to the issues faced by the favelas but also to promote <b>collaborative and inclusive solutions</b> for global challenges. By listening to and integrating the experiences and proposals from the favelas, the G20 Favelas contributes to a more <b>sustainable and equitable future</b> for all.
            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[9] = el)}>
          <div className="box-eventos">
            <h2>According to the Data Favela Institute, Brazilian favelas generate about 202 billion reais annually, demonstrating their economic potential and the entrepreneurial and productive strength of their residents. This is just one indication of how the inclusion of favela populations in the development of public policies is essential to combat hunger and poverty in Brazil.

            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[10] = el)}>
          <div className="box-eventos">
            <h2>Debuting in Rio de Janeiro under Brazil’s G20 presidency, the <b>Oceans 20</b> (O20) is another working group that officially takes shape in Rio. The creation of Oceans 20 is a historic milestone, recognizing the <b>ocean’s central role</b> in global agendas on climate, energy, and the environment. Although it is a global and interconnected ecosystem, it is diverse in its characteristics. The group plays a crucial role in giving voice to <b>civil society</b>, represented by non-governmental organizations, private initiatives, Indigenous peoples, traditional communities, and scientists, allowing the various issues surrounding the ocean to be debated.

            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[11] = el)}>
          <div className="box-eventos">
            <h2>During the G20, the city hosted six <b>Nobel Prize laureates</b>. At different events, these experts gave talks and debated crucial global issues such as technological innovation, international peace agreements, and sustainable development. Their presence reinforced the importance of the event and placed Rio at the center of discussions about the <b>future of humanity</b>. Events and presences like these, along with documents developed at the meetings, are part of the <b>intellectual legacy</b> of the G20 for Rio.
            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[12] = el)}>
          <div className="box-eventos">
            <h2>At the <b>Foreign Ministers' Meeting</b>, the foreign ministers of the G20 member countries (as well as foreign ministers from other countries invited by Brazil) gathered to discuss the role of the G20 in light of current geopolitical tensions, as well as the effective <b>reform of global governance</b>.
            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[13] = el)}>
          <div className="box-eventos">
            <h2><b>G20 Summit</b> in Rio de Janeiro: The Summit represents the culmination of the work led by the country holding the rotating presidency of the group. It is the moment when <b>heads of State and government</b> approve the agreements negotiated throughout the year and outline strategies for addressing global challenges.


            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[14] = el)}>
          <div className="box-eventos">
            <h2>In Brazil, the G20 Leaders' Summit is scheduled for November 18 and 19, 2024, in Rio de Janeiro. The Summit will take place at one of the symbols of Rio’s culture: the <b>Museum of Modern Art of Rio (MAM)</b>.

            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[15] = el)}>
          <div className="box-eventos">
            <h2>In November 2024, the world will come to Rio. Leaders will be welcomed at the iconic modernist building, reinvented at 75 years old through an <b>extensive renovation</b>. A living cultural institution within one of the largest urban parks in the world represents an invaluable <b>legacy of the G20 for Rio</b>.

            </h2>
          </div>
        </div>
        <div className="text-card-eventos" ref={(el) => (textRefs.current[16] = el)}>
          <div className="box-eventos">
            <h2>The choice of MAM for the meeting enabled the Rio City Hall to carry out a <b>revitalization of over 100,000 m²</b>. With an investment of R$32 million, the works included renovations in the museum's internal areas and the revitalization of the surrounding environment, including the restoration of Burle Marx’s landscaping. The project covered the modernization of the Exhibition Block, the <b>renovation of the School Block</b>, the installation of new lighting in the outdoor areas, the creation of a public promenade, and the enhancement of the MAM Gardens. After the G20, <b>MAM will reopen to the public</b>, with new spaces for leisure, education, and art, along with a renewed program. In this way, the G20 leaves a <b>physical legacy</b> for Rio, adding to the extensive intellectual legacy provided by the event.

            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
