import { MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBCardBody, MDBCard, MDBCardTitle } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";

export interface ICardVideo {
    url: string
}

export const CardVideo:React.FC<ICardVideo> = ({url}) =>{
    const [videoUrl, setVideoUrl] = useState("");
    
    useEffect(()=>{
        const embededUrl = url.split("?v=")[1]
        setVideoUrl("https://www.youtube.com/embed/"+embededUrl)
        console.log("https://www.youtube.com/embed/"+embededUrl)
    },[])

    return(
        <MDBRow className="justify-content-center">
            <MDBCol md="8" lg="10">
                <MDBCard>
                    <MDBCardBody>
                    <MDBCardTitle className="text-center">Assista abaixo</MDBCardTitle>
                    <div className="ratio ratio-16x9">
                        <iframe
                        src={videoUrl}
                        title="YouTube video"
                        allowFullScreen
                        ></iframe>
                    </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}