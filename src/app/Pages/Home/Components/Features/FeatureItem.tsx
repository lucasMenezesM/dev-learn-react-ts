import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';

interface IFeatureItem {
    title: string;
    description: string;
    imageUrl: string;
    btnUrl: string;
    btnText: string;
}

export const FeatureItem: React.FC<IFeatureItem> = ({
    title, 
    description, 
    imageUrl,
    btnUrl,
    btnText
}) =>{
    return (
        <MDBCol>
            <MDBCard className='h-100 features__feature-item'>
                <MDBCardImage
                    src={imageUrl}
                    alt={title}
                    position='top'
                />
                <MDBCardBody>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText>
                    {description}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                    {/* <small className='text-muted'>Last updated 3 mins ago</small> */}
                    <Link to={btnUrl}>
                        <MDBBtn className='primary'>{btnText}</MDBBtn>
                    </Link>
                    
                </MDBCardFooter>
            </MDBCard>
        </MDBCol>
    )
  
}