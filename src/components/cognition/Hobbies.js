const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <div className="hobbies-content">
        <ul>
          <li className="hobby"><i className="fas fa-yin-yang"></i><span>Arts martiaux</span></li>
          <li className="hobby"><i className="fas fa-hiking"></i><span>Voyages</span></li>
          <li className="hobby"><i className="fas fa-space-shuttle"></i><span>Physique</span></li>
          <li className="hobby"><i className="fas fa-seedling"></i><span>Ecologie</span></li>
          <li className="hobby"><i className="fas fa-tools"></i><span>Bricolage</span></li>
        </ul>
        <ul>
          <li className="hobby"><i className="fas fa-brain"></i><span>Intelligence artificielle</span></li>
          <li className="hobby"><i className="fas fa-chess-board"></i><span>Réalité virtuelle</span></li>
          <li className="hobby"><i className="fas fa-cubes"></i><span>Impression 3D</span></li>
          <li className="hobby"><i className="fas fa-dragon"></i><span>SF, mangas, fantasy, DD...</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Hobbies;