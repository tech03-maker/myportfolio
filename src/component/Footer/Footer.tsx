import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <div className="footer p-2 mt-5 text-center text-black">
        <span>
          <FontAwesomeIcon icon={faCopyright} />
          All Right Reserved || 2024
        </span>
      </div>
    </div>
  );
};

export default Footer;
