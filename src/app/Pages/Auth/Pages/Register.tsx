import { useState } from "react";
import { MDBInput, MDBCol, MDBRow, MDBBtn, MDBContainer } from "mdb-react-ui-kit";

import { Link, useNavigate } from "react-router-dom";
import { dummyUsers as users } from "../../../db/users";
import { Alert } from "react-bootstrap";

export function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleRegister = (e: React.FormEvent): void => {
    e.preventDefault();
    
    console.log(email, name, password);

    if (!name || !password || !passwordConfirmation || !email)
      return setError("Preencha todos os campos");

    if (password !== passwordConfirmation) return setError("As senhas não são iguais");

    const user = users.find((user) => user.email === email);

    if (user) return setError("Email já registrado");

    return navigate("/");
  };

  return (
    <MDBContainer id="register__container">
      <h2 className="mt-3 mb-3">Crie sua conta!</h2>
      <h5 className="mb-4">Crie uma nova conta para aproveitar os recursos da DevLearn!</h5>

      <div className="register__form-container">
        <div className="register__image-container">
          <img
            src="/images/auth-image.jpg"
            className="img-fluid shadow-4 register__image mb-4"
            alt="..."
          />
        </div>

        <form className="register__form" onSubmit={handleRegister}>
          {error.length > 0 && (
            <MDBRow className="">
              <MDBCol>
                <Alert variant={"danger"}>{error}</Alert>
              </MDBCol>
            </MDBRow>
          )}

          <MDBRow className="mb-4">
            <MDBCol>
              <MDBInput
                value={name}
                id="form3Example1"
                label="Nome"
                onChange={(e) => setName(e.target.value)}
              />
            </MDBCol>
            <MDBCol>
              <MDBInput value={""} id="form3Example2" label="Last name" />
            </MDBCol>
          </MDBRow>

          <MDBInput
            value={email}
            className="mb-4"
            type="email"
            id="form3Example3"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <MDBInput
            value={password}
            className="mb-4"
            type="password"
            id="form3Example4"
            label="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />

          <MDBInput
            value={passwordConfirmation}
            className="mb-4"
            type="password"
            id="form3Example4"
            label="Confirme sua senha"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />

          <MDBBtn onClick={handleRegister} type="submit" className="mb-4" block>
            CADASTRAR
          </MDBBtn>

          <MDBRow className="mb-4">
            <MDBCol>
              Já possui uma conta? <Link to="/login">Faça login aqui</Link>
            </MDBCol>
          </MDBRow>
        </form>
      </div>
    </MDBContainer>
  );
}
