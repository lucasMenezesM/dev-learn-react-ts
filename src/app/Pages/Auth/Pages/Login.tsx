import React, { useState } from "react";
import { MDBInput, MDBCol, MDBRow, MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

import "../auth.css";
import { Link } from "react-router-dom";
import { dummyUsers as users } from "../../../db/users";
import { Alert } from "react-bootstrap";
interface FlashMessage {
  name: string;
  color: string;
}

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string>("");

  const handleLogin = (): void => {
    console.log(`password: ${password}`);
    console.log(`email: ${email}`);

    if (!email || !password) return setErrors("Preencha todos os campos");

    const user = users.find((user) => user.email === email);

    if (!user || user.password !== password) return setErrors("Credenciais inválidas");

    return navigate("/");
  };

  return (
    <MDBContainer id="login__container">
      <h2 className="mt-5 mb-3">Entre com a sua conta!</h2>
      <h5 className="mb-3">
        Entre com suas credenciais para aproveitar o máximo do que a plataforma pode oferecer!
      </h5>

      <div className="login__form-container">
        <div className="register__image-container">
          <img
            src="/images/auth-image.jpg"
            className="img-fluid shadow-4 register__image mb-4"
            alt="..."
          />
        </div>

        <form className="login__form">
          {errors.length > 0 && (
            <MDBRow className="mt-4">
              <MDBCol>
                <Alert variant={"danger"}>{errors}</Alert>
              </MDBCol>
            </MDBRow>
          )}
          <MDBInput
            value={email}
            className="mb-4"
            type="email"
            id="form1Example1"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            value={password}
            className="mb-4"
            type="password"
            id="form1Example2"
            label="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />

          <MDBBtn onClick={handleLogin} className="" type="button" block>
            ENTRAR
          </MDBBtn>

          <MDBRow className="my-4">
            <MDBCol>
              Ainda não tem conta? <Link to="/signup">Cadastre-se aqui</Link>
            </MDBCol>
          </MDBRow>
        </form>
      </div>
    </MDBContainer>
  );
}
