import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit"
import { useState } from "react"
import { ConfirmationModel } from "../../../shared/modals/ConfirmationModel";
import { Alert } from "react-bootstrap";

export const NewCategory = () =>{
    const [name, setName] = useState<string>("");
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();

        if (name.length < 4) return setError("O nome da Categoria precisa ter mais de 3 caracteres")
            
        setShowModal(true);
        console.log("Acionado")
    }

    return (
        <section id="new-category">
            <ConfirmationModel 
                title="Sucesso" 
                body={`A Categoria ${name} foi cadastrada com sucesso`} 
                setShow={setShowModal}
                show={showModal} 
                navigateLink="/categories"
            />

            <MDBContainer className="my-5 form-container">
                <MDBRow>
                    <MDBCol md="6" className="offset-md-3">
                    <form className="form-style" onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4">Cadastrar nova Categoria</h2>

                        {error.length > 0 && (
                            <MDBRow className="mt-4">
                                <MDBCol>
                                    <Alert variant={"danger"}>
                                        {error}
                                    </Alert>
                                </MDBCol>
                            </MDBRow>
                        )}

                        <MDBInput
                            label="Nome"
                            id="name"
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mb-4"
                            required
                        />
                        
                        <div className="d-flex justify-content-center">
                            <MDBBtn type="submit" className="w-100 submit-btn">
                                <MDBIcon fas icon="user-plus" className="me-2" />
                                Cadastrar
                            </MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}
