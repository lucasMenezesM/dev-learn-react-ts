import React, { useState } from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

interface ISearchInput {
    search: string;
    setSearch: ()=>void;
}
export const SearchInput: React.FC<ISearchInput> = ({search, setSearch}) =>{
  const [showSearchAlert, setShowSearchAlert] = useState(false);

  return (
    <>
      <MDBInputGroup>
        <MDBInput label='Search' />
        <MDBBtn onClick={() => setShowSearchAlert(true)} rippleColor='dark'>
          <MDBIcon icon='search' />
        </MDBBtn>
      </MDBInputGroup>

      {/* <MDBAlert delay={1000} position='top-right' autohide appendToBody show={showSearchAlert}>
        Search!
      </MDBAlert> */}
    </>
  );
}