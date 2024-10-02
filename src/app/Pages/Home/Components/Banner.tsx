import { MDBBtn } from "mdb-react-ui-kit"
import { Link } from "react-router-dom"

import "./Banner.css"

export const Banner = () =>{
    return <section className="home__banner">
        <h1>Seja bem vindo a DevLearn!</h1>
        <h3>Sua plataforma de conhecimento em tecnologia</h3>

        <div className="home__banner-buttons">
            <Link to={"/signup"}>
                <MDBBtn className="primary-banner">Cadastrar</MDBBtn>
            </Link>
            <Link to={"/login"}>
                <MDBBtn className="primary-banner">Fazer Login</MDBBtn>
            </Link>
        </div>
    </section>
}