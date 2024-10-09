import { MDBContainer, MDBBtnGroup, MDBBtn } from "mdb-react-ui-kit";
import { CardVideo } from "../Components/CardVideo";
import { IClass } from "../../../db/classes";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { dummyCourses, ICourse } from "../../../db/courses";

export const ClassDetail = () => {
  const navigate = useNavigate();

  const { classId } = useParams<{ classId: string }>();
  const { courseId } = useParams<{ courseId: string }>();

  const [course, setCourse] = useState<ICourse | undefined>()
  const [classItem, setClassItem] = useState<IClass | undefined>();

  useEffect(()=>{
    const course = dummyCourses.find(course => String(course.id) === courseId)
    if(course) {
      setCourse(course)
      const classItem = course.classes.find(item => String(item.id) === classId)
      setClassItem(classItem);
    };
  },[])

  if(!classItem) return <></>;

  return (
    <section id="class-details">
      <MDBContainer className="mt-5">
        <h2 className="mt-4 mb-3">{classItem.name}</h2>
        <CardVideo url={classItem.url}/>
        <MDBBtnGroup className="mb-5 mt-3">
            <MDBBtn onClick={()=> navigate("/classes/all/"+course?.id)} className="primary-inverted">Voltar para Aulas</MDBBtn>
            <MDBBtn onClick={()=> navigate("/")} className="primary-inverted">Página Inicial</MDBBtn>
          </MDBBtnGroup>
      </MDBContainer>
    </section>
  );
};
