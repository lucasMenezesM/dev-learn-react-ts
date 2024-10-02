import { FeatureItem } from "./FeatureItem"
import { MDBRow, MDBContainer, MDBCol } from "mdb-react-ui-kit"

import "./Features.css"

export const Features = () =>{
    return <section id="features">
        <MDBContainer>
            <div className="features__container">
                <MDBRow>
                    <MDBCol className="features__text">
                        <h4>Conheça a Plataforma</h4>
                        <h5>A nossa plataforma de cursos oferece uma ampla variedade de cursos online para ajudar você a adquirir novas habilidades e avançar na sua carreira. </h5>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    <FeatureItem 
                        title="Acesso Ilimitado 24/7" 
                        description="Tenha acesso ilimitado a todos os cursos e conteúdos da plataforma a qualquer hora, de qualquer lugar, com flexibilidade para estudar no seu ritmo." 
                        imageUrl="/images/feature-1.jpg"
                        btnText="Cursos"
                        btnUrl="/courses"
                    />
                    <FeatureItem 
                        title="Conteúdo Sempre Atualizado" 
                        description="Acompanhe os últimos avanços tecnológicos com materiais de estudo constantemente atualizados por especialistas da área." 
                        imageUrl="/images/feature-2.jpg"
                        btnText="Categorias"
                        btnUrl="/categories"
                    />
                    <FeatureItem 
                        title="Comunidade Colaborativa" 
                        description="Faça parte de uma comunidade de estudantes e profissionais que compartilham conhecimento, discutem tendências e colaboram em projetos." 
                        imageUrl="/images/feature-3.jpg"
                        btnText="Cursos"
                        btnUrl="/courses"
                    />
                </MDBRow>
            </div>
        </MDBContainer>
    </section>
}