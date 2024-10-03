import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { domainToASCII } from "url";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <MDBFooter id="footer" bgColor="dark" color="white" className="text-center text-lg-start pt-1">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Seja Bem vindo
              </h6>
              <p>
                A nossa plataforma de cursos oferece uma ampla variedade de cursos online para
                ajudar você a adquirir novas habilidades e avançar na sua carreira. Com instrutores
                experientes e conteúdo atualizado, garantimos uma experiência de aprendizado de alta
                qualidade.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Redes Sociais</h6>
              <p>
                <Link className="text-reset" to={""}>
                  Instagram
                </Link>
              </p>
              <p>
                <Link className="text-reset" to={""}>
                  Facebook
                </Link>
              </p>
              <p>
                <Link className="text-reset" to={""}>
                  BlueSkyes
                </Link>
              </p>
              <p>
                <Link className="text-reset" to={""}>
                  Threads
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">navegue</h6>
              <p>
                <Link className="text-reset" to={"/courses"}>
                  Todos os Cursos
                </Link>
              </p>
              <p>
                <Link className="text-reset" to={"/categories"}>
                  Categorias
                </Link>
              </p>
              <p>
                <Link className="text-reset" to={"/about"}>
                  Sobre
                </Link>
              </p>
              <p>
                <Link className="text-reset" to={"/"}>
                  Página inicial
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">contato</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="" />
                São Paulo, rua X 204
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="" />
                devLearn@devlearn.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="" /> +55 99 99999-9999
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © {year} Copyright:{" "}
        <a className="text-reset fw-bold" href="/">
          DevLearn - Todos os direitos reservados.
        </a>
      </div>
    </MDBFooter>
  );
}
