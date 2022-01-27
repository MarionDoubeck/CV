import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/profil.jpg" alt="profil-pic" />
          <h3>Marion Doubeck</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact="true" to="/">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/knowledges">
              <i className="fas fa-tools"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/portfolio">
              <i className="fas fa-images"></i>
              <span>Réalisations</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/cognition">
              <i className="fas fa-brain"></i>
              <span>Cognition</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/contact">
              <i className="fas fa-paper-plane"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a href="https://www.facebook.com/marion.doubeck" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/marion-doubeck-220884/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/MarionDoubeck?tab=repositories" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Marion Doubeck - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;