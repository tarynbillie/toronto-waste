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
    
    svgColor = () => {
        document.getElementsByClassName('favourite-star').style.fill = 'rgb(0, 148, 89)';
    }
    
    render() {

        const { title, body, handleLocal, isFavourite, svgColor } = this.props;


        return (
            <Container className={isFavourite ? 'isFavourite' : ''} title={title} onClick={() => { handleLocal(title) }} >
                <Title >
                    <Star onClick={() => {svgColor()}}/>
                    <h1>{title}</h1>
                </Title>
                <Body dangerouslySetInnerHTML={{ __html: this.htmlDecode(body) }} />
            </Container>
        )
    }
}

const Container = styled.div`
  width: 100%;
`;


const Title = styled.button`
    display: flex;
    align-items: center;
    padding: 0;
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
        :hover {
            fill: rgb(0, 148, 89);
        }
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