import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { ConfirmationModel } from "../../../shared/modals/ConfirmationModel";
import { Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ICategory } from "../../../db/categories";
import { dummyCategories } from "../../../db/categories";
import { NotFound } from "../../../shared/components/NotFound";

export const EditCategory = () => {
  const { id } = useParams<{ id: string }>();

  const [name, setName] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string>("");
  const [category, setCategory] = useState<ICategory>();

  const handleSubmit = (e: React.FormEvent) => {
    // Run Logic to update cateogory
    e.preventDefault();

    if (name.length < 4) return setError("O nome da Categoria precisa ter mais de 3 caracteres");

    setShowModal(true);
  };

  // Fething the category from DB
  useEffect(() => {
    const category = dummyCategories.find((category) => String(category.id) === id);

    if (category) {
      setCategory(category);
      setName(category.name);
    }
  }, [id]);

  if (!category)
    return <NotFound title="Erro 404" subTitle="A categoria que você buscou não foi encontrada" />;

  return (
    <section id="new-category">
      <ConfirmationModel
        title="Sucesso"
        body={`A Categoria ${name} foi atualizada com sucesso`}
        setShow={setShowModal}
        show={showModal}
        navigateLink={"/categories/" + category?.id}
      />

      <MDBContainer className="my-5 form-container">
        <MDBRow>
          <MDBCol md="6" className="offset-md-3">
            <form className="form-style" onSubmit={handleSubmit}>
              <h2 className="text-center mb-4">Atualizar Categoria</h2>

              {error.length > 0 && (
                <MDBRow className="mt-4">
                  <MDBCol>
                    <Alert variant={"danger"}>{error}</Alert>
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
                <MDBBtn type="submit" className="primary w-100 submit-btn">
                  <MDBIcon fas icon="user-plus" className="me-2" />
                  Atualizar
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
