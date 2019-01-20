import React, { Component } from 'react'
import styled from 'styled-components'
import Star from '../../assets/star'



export default class WasteItem extends Component {

    constructor(props) {
        super(props);

        this.htmlDecode = this.htmlDecode.bind(this);
    }

    htmlDecode(html) {
        let text = document.createElement("textarea");
        text.innerHTML = html;
        return text.value
    }


    render() {

        const { title, body, handleLocal, isFavourite } = this.props;

        return (
            <ResContain>
                <Title>
                    <Star className={isFavourite ? 'isFavourite' : ''} title={title} onClick={() => { handleLocal(title) }} />
                    <h1>{title}</h1>
                </Title>
                <Body dangerouslySetInnerHTML={{ __html: this.htmlDecode(body) }} />
            </ResContain>
        )
    }
}

const ResContain = styled.div`
  margin: 1rem 0.8rem;
  width: 97%;
`;


const Title = styled.button`
    display: flex;
    alignItems: 'center';
    width: 50%;
    position: absolute;
    background-color: transparent;
    border: none;
    outline: none;

    h1 {
    margin: 0;
    font-weight: normal;
    font-size 18px;
    }

    svg {
    fill: #C9C9C9;
    cursor: pointer;
    :hover, &.isFavourite {
        fill: rgb(0, 148, 89);
    }
    
`;

const Body = styled.div`
    margin-bottom: 2rem;
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