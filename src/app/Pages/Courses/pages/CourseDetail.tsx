import {
  MDBBtn,
  MDBBtnGroup,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dummyCourses as courses } from "../../../db/courses";
import { ICourse } from "../../../db/courses";
import { Link } from "react-router-dom";
import { DeleteModal } from "../../../shared/modals/DeleteModal";
import { NotFound } from "../../../shared/components/NotFound";
import { Banner } from "../../../shared/components/Banner";

export const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [course, setCourse] = useState<ICourse | undefined>(undefined);
  const [show, setShow] = useState(false);

  useEffect((): void => {
    const course = courses.find((course) => String(course.id) === id);

    setCourse(course);
  }, [id]);

  if (!course) return <NotFound title="Erro 404" subTitle="O curso buscado não foi encontrado" />;

  const handleDestroyCourse = (): void => {
    // RUN LOGIC TO DESTROY COURSE
  };

  return (
    <section id="course-detail" className="">
      <DeleteModal
        title={`Tem certeza?`}
        body={`Tem certeza que deseja apagar o curso ${course.name}? Essa ação não pode ser desfeita após isso.`}
        confirmationTitle={`Curso Apagado!`}
        confirmationBody={`O curso ${course.name} foi apagado com sucesso e não se encontra mais no sistema`}
        setShow={setShow}
        show={show}
        onDelete={handleDestroyCourse}
        navegateLink="/courses"
      />

      <Banner title={course.name} subTitle={course.description} image="course-detail-image.jpg" />

      <div className="course-detail__card-buttons">
        <MDBContainer className="d-flex justify-content-end">
          <MDBBtnGroup className="d-flex flex-wrap">
            <MDBBtn className="primary">Acessar</MDBBtn>
            <MDBBtn className="btn-success">
              <Link className="back-btn" to={"/courses/edit/" + course.id}>
                Editar
              </Link>
            </MDBBtn>
            <MDBBtn onClick={() => setShow(true)} className="btn-danger">
              Excluir
            </MDBBtn>
            <MDBBtn className="transparent-inverted back-btn-container">
              <Link className="back-btn" to={"/courses"}>
                Voltar
              </Link>
            </MDBBtn>
          </MDBBtnGroup>
        </MDBContainer>
      </div>

      <MDBContainer className="course-detail__details mt-5 flex-wrap">
        <MDBRow className="course-detail__details-container d-flex justify-content-center">
          <h3>Veja detalhes do curso abaixo:</h3>

          <MDBCol
            md={6}
            className="course-detail__details-text d-flex justify-content-space-around flex-wrap"
          >
            <div className="course-detail__image">
              <img
                src="/images/course-detail-image2.png"
                className="img-fluid shadow-4 register__image mb-4"
                alt="..."
              />
            </div>
          </MDBCol>
          <MDBCol md={6}>
            <MDBRow>
              <MDBListGroup>
                <MDBListGroupItem>Professor: {course.teacher}</MDBListGroupItem>
                <MDBListGroupItem>Número de aulas: {course.classes}</MDBListGroupItem>
                <MDBListGroupItem>
                  {course.categories.length > 1
                    ? "Categorias relacionadas: "
                    : "Categoria relacionada: "}
                  {course.categories.map((category, index) => {
                    return (
                      <Link className="courses__category-link" to={"/categories/" + category.id}>
                        {index === course.categories.length - 1
                          ? category.name
                          : category.name + ", "}
                      </Link>
                    );
                  })}
                </MDBListGroupItem>
                <MDBListGroupItem>Alunos matriculados: 20</MDBListGroupItem>
              </MDBListGroup>
            </MDBRow>

            <MDBRow className="mt-3 mb-4">
              <MDBContainer className="d-flex justify-content-center my-2">
                <h5>CURSO DISPONÍVEL PARA MATRÍCULA</h5>
              </MDBContainer>
              <MDBBtn className="primary">Matricular-se</MDBBtn>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
