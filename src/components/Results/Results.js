import React from 'react'
import styled from 'styled-components'
import WasteItem from './WasteItem'


const Results = ({ data, handleLocal, favouritesArray }) => (

  <ResContain>
    {data &&
      data.map(({ body, title }, index) => (
        <WasteItem
          key={index}
          title={title}
          body={body}
          handleLocal={handleLocal}
          isFavourite={favouritesArray && favouritesArray.includes(title)}
        />
      ))}
  </ResContain>
)

const ResContain = styled.div`
  width: 97%;
  padding-left: 1rem;
`;

export default Results;
