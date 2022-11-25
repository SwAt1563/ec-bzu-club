import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p>
                حقوق الطبع والنشر محفوظة ل
                <Link to="/">نادي الحاسوب والكهرباء </Link>
                لسنة 2023
                <br />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
