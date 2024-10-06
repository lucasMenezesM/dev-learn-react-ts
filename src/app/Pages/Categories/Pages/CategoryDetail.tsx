import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dummyCategories } from "../../../db/categories";
import { ICategory } from "../../../db/categories";
import { NotFound } from "../../../shared/components/NotFound";
import { MDBContainer } from "mdb-react-ui-kit";
import { Banner } from "../../../shared/components/Banner";

export const CategoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<ICategory>();

  const [name, setName] = useState<string>("");
  useEffect(() => {
    const category = dummyCategories.find((category) => String(category.id) === id);

    if (category) {
      setCategory(category);
      setName(category.name);
    }
  }, [id]);

  if (!category)
    return <NotFound title="Erro 404" subTitle="A categoria que você buscou não foi encontrada!" />;

  return (
    <section id="category-detail">
      <Banner title={category.name} image="category-detail-image.jpg" />

      <MDBContainer>
        {category.courses.length > 0 && (
          <h3>Confira abaixo os cursos associados a essa categoria:</h3>
        )}
      </MDBContainer>
    </section>
  );
};
