import { useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBBtnGroup,
} from "mdb-react-ui-kit";
import { dummyCategories as categories } from "../../../db/categories";
import { ICategory } from "../../../db/categories";
import { Link } from "react-router-dom";
import { DeleteModal } from "../../../shared/modals/DeleteModal";

import "../Categories.css";

export const Categories: React.FC = () => {
  return (
    <section id="categories">
      <MDBContainer className="categories__container">
        <div className="categories__initial-text">
          <h2>Categorias disponíveis</h2>
          <h3>Confira abaixo as mais diversas categorias da plataforma</h3>
        </div>

        <div className="categories__categories-list">
          {categories.map((category) => {
            return <CategoryItem category={category} />;
          })}
        </div>
      </MDBContainer>
    </section>
  );
};

interface ICategoryItem {
  category: ICategory;
}

const CategoryItem: React.FC<ICategoryItem> = ({ category }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDestroy = () => {
    // RUN LOGIC TO DESTROY CATEGORY
  };

  return (
    <MDBCard className="categories__category-item">
      <DeleteModal
        title={"Tem certeza?"}
        body={`Tem certeza que deseja excluir a categoria ${category.name}? Essa ação não pode ser desfeita.`}
        confirmationTitle="Categoria Apagada!"
        confirmationBody={`A Categoria ${category.name} foi apagada e não se encontra mais no sistema DevLearn.`}
        onDelete={handleDestroy}
        setShow={setShowModal}
        show={showModal}
        navegateLink="/categories"
      />

      <MDBCardBody>
        <MDBCardTitle>{category.name}</MDBCardTitle>
        <MDBCardText>Cursos: {category.courses.length}</MDBCardText>
        <MDBBtnGroup className="d-flex flex-wrap">
          <MDBBtn className="primary">
            <Link to={"/categories/" + category.id}>Visualizar</Link>
          </MDBBtn>
          <MDBBtn className="btn-success">
            <Link to={"/categories/edit/" + category.id}>Editar</Link>
          </MDBBtn>
          <MDBBtn onClick={() => setShowModal(true)} className="btn-danger">
            Excluir
          </MDBBtn>
        </MDBBtnGroup>
      </MDBCardBody>
    </MDBCard>
  );
};
