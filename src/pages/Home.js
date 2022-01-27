import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Marion Doubeck</h1>
          <h2>Développeuse Front-end</h2>
          <h3>Pratiques et conseils Green IT</h3>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">Télécharger en PDF</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;