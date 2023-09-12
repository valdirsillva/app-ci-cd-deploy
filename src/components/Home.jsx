import React from "react";

export class Home extends React.Component {
  render() {
    return (
        
      <div class="grid md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-10 hover:grid-cols-4 bg-[#232222] py-6 sm:p-20 p-5">
        
          <div className="grid ">
              <img className="border-solid border border-white" src="/images/image1.jpg" />
              <span className="text-white font-medium p-3">Gerador de energia eólica no campo</span>
          </div>
          <div className="grid">
              <img className="border-solid border border-white rounded-md" src="/images/image2.jpg" />
              <span className="text-white font-medium p-3">Vista panoramica do rio</span>
          </div>
          <div className="grid">
              <img className="border-solid border border-white rounded-md" src="/images/image3.jpg" />
              <span className="text-white font-medium p-3">Casa de campo ao lado de um grande lago</span>
          </div>
          <div className="grid">
              <img className="border-solid border border-white rounded-md" src="/images/image4.jpg" />
              <span className="text-white font-medium p-3">Casa de campo ao lado de um grande lago</span>
          </div>

          <div className="grid">
              <img className="border-solid border border-white rounded-md" src="/images/image5.jpg" />
              <span className="text-white font-medium p-3">Pássaro</span>
          </div>
          <div className="grid">
              <img className="border-solid border border-white rounded-md" src="/images/image6.jpg" />
              <span className="text-white font-medium p-3">Lago de águas cristalinas próximo das montanhas</span>
          </div>
          <div className="grid">
              <img className="border-solid border border-white rounded-md" src="/images/image7.jpg" />
              <span className="text-white font-medium p-3">Natureza, céu azul </span>
          </div>
          <div className="grid">
              <img className="border-solid border border-white rounded-md" src="/images/image8.jpg" />
              <span className="text-white font-medium p-3">Flores</span>
          </div>
      </div>
    );
  }
}
