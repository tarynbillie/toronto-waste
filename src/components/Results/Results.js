import React from 'react'
import styled from 'styled-components'
import WasteItem from './WasteItem'


const Results = ({ data, handleLocal, favourites }) => (

  <ResContain>
    {data &&
      data.map(({ body, title }, index) => (
        <WasteItem
          key={index}
          title={title}
          body={body}
          handleLocalStorage={handleLocal}
          isFavourited={favourites && favourites.includes(title)}
        />
      ))}
  </ResContain>
)

const ResContain = styled.div`
  margin: 1rem 0.8rem;
  width: 97%;
`;

export default Results;
