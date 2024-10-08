import { useNavigate, Link } from "react-router-dom"
import { IClass } from "../../../db/classes"
import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn, MDBCardText } from "mdb-react-ui-kit"
import { DeleteModal } from "../../../shared/modals/DeleteModal"
import { useState } from "react"

export interface ClassItem {
    classItem: IClass
}

export const ClassItem:React.FC<ClassItem> = ({classItem}) =>{
    const navigate = useNavigate()

    const [showModal, setShowModal] = useState<boolean>(false);

    const handleDestroy = () =>{
        
    } 

    return (
        <div className="class-card">
            <DeleteModal 
                title="Excluír Aula" 
                body="Tem certeza que deseja excluír essa aula?" 
                confirmationTitle="Aula Excluída!" 
                confirmationBody="A aula foi excluída e não se encontra mais na lista de aulas deste curso." 
                navegateLink={`/classes/all/${classItem.course_id}`}
                onDelete={handleDestroy}
                setShow={setShowModal}
                show={showModal}
            />

            <MDBCard className='w-50 mb-4'>
                <MDBCardBody>
                <MDBCardTitle>{classItem.name}</MDBCardTitle>
                <MDBCardText>
                    Duração: {classItem.duration} minutos
                </MDBCardText>
                <MDBCardText>
                    Professor(a): exemplo
                </MDBCardText>
                <Link to={"classes/"}>
                    <MDBBtn className="primary">Ir para Aula</MDBBtn>
                </Link>
                <Link to={"/classes/edit/"+classItem.id}>
                    <MDBBtn className="btn-success">Editar</MDBBtn>
                </Link>
                <Link to={""}>
                    <MDBBtn onClick={()=>setShowModal(true)} className="btn-danger">Excluír</MDBBtn>
                </Link>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}