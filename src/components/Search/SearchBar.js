import React, { Component } from 'react'
import styled from 'styled-components'
import magnifyer from '../../assets/search.svg';


export default class SearchBar extends Component {
  render() {
    return (
        <Wrapper>
            <Input type='text' name='search'/>
            <Search>
                <Mag src={magnifyer} alt='magnifyer'/>
            </Search>
        </Wrapper>
    )
  }
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    width: 100%;
    margin-top: 1rem;
`;

const Input = styled.input`
    width: 93%;
    height: 2.5rem;
    padding-left: 0.8rem;
    font-size: 18px;
    border-radius: 2px;
    border: 1px solid lightgrey;
    outline: none;
`;

const Search = styled.button`
    display: flex;
    height: 2.8rem;
    width: 2.9rem;
    background-color: #009459;
    border-radius: 3px;
    outline: none;
    cursor: pointer;
`;

const Mag = styled.img`
    transform: rotate(-270deg);
    width: 100%;
    height: auto;
    fill: white;
`;