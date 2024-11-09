import React from 'react';
import "./Conclusao.css";
import Creditos from './Creditos';
const Conclusao = () => {
  return (
    <>
      <div className="conclusao-container">
        <div className="conclusao">
          <h2>
            With Rio de Janeiro as host, the 2024 G20 has become a historic milestone for both the city and Brazil. The summit has elevated the country to the center of global discussions, bringing together leaders from the world's largest economies to debate key issues such as social inequality, technological innovation and the climate crisis. <br></br><br></br>
            By hosting an event of this magnitude, Brazil not only strengthens its diplomatic position on the international stage, but also reaffirms Rio de Janeiro's role as a strategic and globally relevant destination for major events. With a robust infrastructure and experience in hosting international meetings, the marvelous city consolidates its image as a privileged stage for dialogue on the challenges of the global future, attracting even greater visibility and investment in the future.
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