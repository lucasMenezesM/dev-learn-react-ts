import { MDBContainer } from "mdb-react-ui-kit";
import { dummyCourses as courses } from "../../../db/courses";
import { CourseItem } from "../Components/CourseItem";

import "../Courses.css"

export const CoursesList = () => {
  return (
    <section id="courses">
      
      <MDBContainer>
        
        <div className="courses__courses-text">
          <h3>Cursos disponíveis: </h3>
          <h4>Confira nosso acervo de cursos das mais variadas categorias para você explorar e se tornar um profissional na área de tecnologia</h4>
        </div>

        <div className="courses__courses-image mb-5">
          {/* <img src="" alt="" /> */}
          <img src='/images/courses-list-image.jpg' className='img-fluid shadow-4' alt='imagens-cursos' />
        </div>

        <hr className="my-5"/>

        <h5 className="total-courses">Total de cursos disponíveis: {courses.length}</h5>

        <div className="courses__courses-list">
          {courses.map((course) => {
            return <CourseItem key={course.id} course={course}/>
          })}
        </div>
      </MDBContainer>
      
    </section>
  )
};
