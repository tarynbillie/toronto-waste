import React, { Component } from 'react'
import styled from 'styled-components'
import WasteItem from './WasteItem'
import Star from '../../assets/star'



export default class Results extends Component {

  constructor(props) {
    super(props);

    this.htmlDecode = this.htmlDecode.bind(this);

    this.state = {
      searched: false,
    };
  }

  htmlDecode(html) {
    let text = document.createElement("textarea");
    text.innerHTML = html;
    return text.value
  }


  render() {

    const { data, handleLocal, isFavourite} = this.props;

    return (
      <ResContain>
        {data &&
          data.map(({ body, title }, index) => (
            <Result key={index}>
                  <Title>
                    <Star className={isFavourite ? 'isFavourite' : ''} title={title} onClick={() => {handleLocal(title) }} />
                    <h1>{title}</h1>
                  </Title>
                  <Body dangerouslySetInnerHTML={{ __html: this.htmlDecode(body) }} />
                </Result>
          ))}
      </ResContain>
    )
  }
}


const Flex = styled.div`
    display: flex;
    ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
    ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};

`;

const ResContain = styled.div`
  margin: 1rem 0.8rem;
  width: 97%;
  
  svg {
    fill: #C9C9C9;
    cursor: pointer;
  }
`;


const Result = styled(Flex)`
  margin-bottom: 2rem;
`;

const Title = styled(Flex).attrs({
    alignItems: 'center'
})`
    width: 50%;
    position: absolute
    h1 {
      margin: 0;
      font-weight: normal;
      font-size 18px;
    }
  `;

const Body = styled.div`
    width: 50%;
    position: relative;
    left: 50%;
    ul {
      margin: 0;
      padding: 0;
      li {
        padding-bottom: 1rem;
      }
    }
  `;