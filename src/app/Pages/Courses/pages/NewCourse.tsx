import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { ConfirmationModel } from "../../../shared/modals/ConfirmationModel";
import { Alert } from "react-bootstrap";
import { dummyCategories } from "../../../db/categories";
import { Form } from "react-bootstrap";

export const NewCourse = () => {
  const [name, setName] = useState<string>("");
  const [categoriesId, setCategoriesId] = useState<number[]>([]);
  const [teacher, setTeacher] = useState<string>("");

  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string>("");

  const handleAddCategory = (e: any) => {
    const ids = Array.from(e.target.selectedOptions, (option: any) => option.value);
    setCategoriesId(ids);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.length < 4) return setError("O nome do Curso precisa ter mais de 3 caracteres");

    const newCourse = {
      categories: categoriesId,
      name: name,
      description: "test",
      classes: 20,
      id: 12312312,
      teacher: "fulano",
    };

    console.log(newCourse);

    setShowModal(true);
  };

  return (
    <section id="new-course">
      <ConfirmationModel
        title="Sucesso"
        body={`O Curso ${name} foi cadastrado com sucesso!`}
        setShow={setShowModal}
        show={showModal}
        navigateLink="/courses"
      />

      <MDBContainer className="my-5 form-container">
        <MDBRow>
          <MDBCol md="6" className="offset-md-3">
            <form className="form-style" onSubmit={handleSubmit}>
              <h2 className="text-center mb-4">Cadastrar novo Curso</h2>

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

              <MDBInput
                label="Professor(a)"
                id="name"
                type="text"
                name="name"
                value={teacher}
                onChange={(e) => setTeacher(e.target.value)}
                className="mb-4"
                required
              />

              <Form.Group className="mb-4" controlId="formAttributes">
                <Form.Label>Selecione as Categorias do curso</Form.Label>
                <Form.Select multiple onChange={handleAddCategory} style={{ height: "150px" }}>
                  {dummyCategories.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>

              <div className="d-flex justify-content-center">
                <MDBBtn type="submit" className="primary w-100 submit-btn">
                  <MDBIcon fas icon="user-plus" className="me-2" />
                  Cadastrar
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
