import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light align-items-center text-left">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            DevTranq
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Projects
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <a href="#">
                <FontAwesomeIcon className="icons" icon={faGithub} />
              </a>
              <a href="X: https://bit.ly/3V6OA0n">
                <FontAwesomeIcon className="icons" icon={faXTwitter} />
              </a>
              <a href="WhatsApp: https://bit.ly/madrasah-donation-fee">
                <FontAwesomeIcon className="icons" icon={faWhatsapp} />
              </a>
              <a href="Linkedin: https://bit.ly/3V62MGU">
                <FontAwesomeIcon className="icons" icon={faLinkedin} />
              </a>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
