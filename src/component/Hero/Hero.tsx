import {
  faBootstrap,
  faCss3,
  faHtml5,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import circle from "../../assets/circle.png";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center m-auto">
          <h2 className="head text-white fw-bold mt-5">
            Let Us <span className="span">Handle</span> Your{" "}
            <span className="span">Websites!</span>
          </h2>
          <p className="hero-tag text-white text-center">
            Check Out My Portfolio!
          </p>
          <img className="circle" src={circle} alt="" />
        </div>
        <div className="logos col-sm-3 col-md-3 col-lg-3 mt-4 text-center m-auto">
          <FontAwesomeIcon className="tech" icon={faHtml5} />
          <FontAwesomeIcon className="tech" icon={faCss3} />
          <FontAwesomeIcon className="tech" icon={faBootstrap} />
          <FontAwesomeIcon className="tech" icon={faReact} />
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 mb-3">
            <p className="about text-white p-2 fw-bold fs-3">
              My <span className="span">Stack</span>
            </p>
            <p className="note text-white">
              I am Muhammed Jumah, a FrontEnd Developer based in Nigeria
              currently. I will help build catchy and functioning websites your
              users will love to use.
            </p>
            <a href="#">
              <button className="button p-3 fw-bold" type="button">
                I need your service ASAP!
              </button>
            </a>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <p className="about text-white p-2 fw-bold fs-3">
              My <span className="span">Projects</span>
            </p>
            <p className="links text-white">
              <a href="https://zeetechgadgets.com.ng/">
                Zeetech{" "}
                <FontAwesomeIcon
                  className="link-icon"
                  icon={faExternalLinkAlt}
                />
              </a>
            </p>
            <p className="links text-white">
              <a href="https://mustard-one.vercel.app/">
                Mustard Clone{" "}
                <FontAwesomeIcon
                  className="link-icon"
                  icon={faExternalLinkAlt}
                />
              </a>
            </p>
            <p className="links text-white">
              <a href="https://credlock-beta.vercel.app/">
                Credlock Clone{" "}
                <FontAwesomeIcon
                  className="link-icon"
                  icon={faExternalLinkAlt}
                />
              </a>
            </p>

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
