import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Mag from '../../assets/searchSvg.js'


const SearchBar = ({ keyword, handleSearch, handleChange }) => (

    <Wrapper>
        <Input type='search' name='keyword' value={keyword} onChange={(e) => handleChange(e)} />
        <Search aria-label='search' onClick={(e) => handleSearch(e)}>
            <Mag />
        </Search>
    </Wrapper>
);

SearchBar.propTypes = {
    keyword: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired
};


export default SearchBar;

const Flex = styled.form`
    display: flex;
    ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
`;

const Wrapper = styled(Flex).attrs({
    justifyContent: 'space-evenly'
})`
    width: 100%;
    margin: 1rem 0;
`;

const Input = styled.input`
    width: 93%;
    appearance: none;
    height: 2.8rem;
    padding-left: 0.8rem;
    font-size: 18px;
    border-radius: 2px;
    border: 1px solid rgb(201, 201, 201);
    outline: none;
`;

const Search = styled.button`
    display: flex;
    height: 2.8rem;
    width: 2.9rem;
    background-color: rgb(0, 148, 89);
    border-radius: 3px;
    outline: none;
    cursor: pointer;

    svg {
        fill: white;
        width: 100%;
        height: auto;
        transform: rotate(-270deg);
    }
`;
