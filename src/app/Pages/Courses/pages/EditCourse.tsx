import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import { ConfirmationModel } from "../../../shared/modals/ConfirmationModel";
import { Alert } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { dummyCategories } from "../../../db/categories";
import { dummyCourses as courses } from "../../../db/courses";
import { ICourse } from "../../../db/courses";

export const EditCourse = () => {
  const { id } = useParams<{ id: string }>();

  const [name, setName] = useState<string>("");
  const [categoriesId, setCategoriesId] = useState<string[]>([]);
  const [teacher, setTeacher] = useState<string>("");

  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string>("");
  const [course, setCourse] = useState<ICourse | undefined>(undefined);

  useEffect((): void => {
    const course = courses.find((course) => String(course.id) === id);
    if (course) {
      setName(course.name);
      setTeacher(course.teacher);
      setCategoriesId(["1", "2", "3"]);
      setCourse(course);
    }
  }, [id]);

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

  if (!course) return <h1>Curso não encontrado</h1>;

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
              <h2 className="text-center mb-4">Editar Curso</h2>

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
                <Form.Select
                  multiple
                  onChange={handleAddCategory}
                  value={categoriesId}
                  style={{ height: "150px" }}
                >
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
