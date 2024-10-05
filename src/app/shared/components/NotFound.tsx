import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";
import "./NotFound.css";
import { Link, useNavigate } from "react-router-dom";

interface NotFound {
  title: string;
  subTitle: string;
}

export const NotFound: React.FC<NotFound> = ({ title, subTitle }) => {
  const navigate = useNavigate();

  return (
    <section id="not-found">
      <div className="not-found__text mt-3 mb-2">
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
      </div>
      <div className="not-found__image-container mb-3">
        <img
          src="/images/not-found-image.jpg"
          className="img-fluid shadow-4 not-found__image mb-4"
          alt="..."
        />

        <div className="not-found__button mb-4">
          <MDBBtnGroup>
            <MDBBtn className="primary" onClick={() => navigate(-1)}>
              Voltar
            </MDBBtn>

            <MDBBtn className="primary" onClick={() => navigate("/")}>
              Página Inicial
            </MDBBtn>
          </MDBBtnGroup>
        </div>
      </div>
    </section>
  );
};
