import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";

import { ICourse } from "../../../db/courses";
import { Link } from "react-router-dom";

interface ICourseitem {
  course: ICourse;
}

export const CourseItem: React.FC<ICourseitem> = ({ course }) => {
  return (
    <MDBCard alignment="center" className="courses__course-item">
      <MDBCardHeader>
        {course.categories.length > 1 ? "Categorias: " : "Categoria: "}
        {course.categories.map((category, index) => {
          return (
            <Link className="courses__category-link" to={"/categories/" + category.id}>
              {index === course.categories.length - 1 ? category.name : category.name + ", "}
            </Link>
          );
        })}
      </MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{course.name}</MDBCardTitle>

        <MDBCardText>{course.description}</MDBCardText>

        <Link to={"/courses/" + course.id}>
          <MDBBtn className="primary">Visualizar</MDBBtn>
        </Link>
        
      </MDBCardBody>
      <MDBCardFooter className="text-muted">Professor(a): {course.teacher}</MDBCardFooter>
    </MDBCard>
  );
};
