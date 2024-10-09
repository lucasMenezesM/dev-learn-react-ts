import { MDBBtn, MDBBtnGroup, MDBContainer } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyCourses, ICourse } from "../../../db/courses";
import { IClass } from "../../../db/classes";
import { ClassItem } from "../Components/ClassItem";

import "../Classes.css"

export const ClassesList:React.FC = () => {
  const navigate = useNavigate()
  const { courseId } = useParams<{ courseId: string }>();

  const [classes, setClasses] = useState<IClass[]>();
  const [course, setCourse] = useState<ICourse>();

  useEffect(()=>{
    const classes:IClass[] = []
    const course = dummyCourses.find(course => String(course.id) === courseId)
    setCourse(course)

    if (course) {
      course.classes.map((classItem) => {
        classes.push(classItem);
      })
    }
    setClasses(classes)
  },[])

  return (
    <section id="classes">
      <MDBContainer>
        <h2 className="mt-5">Curso de {course?.name}</h2>
        <div className="classes__nav mt-3 mb-5">
          <MDBBtnGroup>
            <MDBBtn onClick={()=> navigate("/courses/"+course?.id)} className="primary-inverted">Voltar para página do Curso</MDBBtn>
            <MDBBtn onClick={()=> navigate("/")} className="primary-inverted">Página Inicial</MDBBtn>
          </MDBBtnGroup>
        </div>

        <div className="classes__classes-list">
          <h3>Aulas disponíveis:</h3>
          {classes?.map((classItem) =>{
            return <ClassItem classItem={classItem}/>
          })}
        </div>
      </MDBContainer>
    </section>
  );
};
