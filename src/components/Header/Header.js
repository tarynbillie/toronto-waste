import React, { Component } from 'react'
import styled from 'styled-components'


export default class Header extends Component {
  render() {
    return (
      <Banner>
        <Title>Toronto Waste Lookup</Title>
      </Banner>
    )
  }
}

const Title = styled.h1`
    text-align: center;
    font-size: 40px;
    color: white;
`;
const Banner = styled.section`
    padding: 0.4rem;
    background: rgba(7,102,166,1);
    background: -moz-linear-gradient(left, rgba(7,102,166,1) 0%, rgba(0,148,89,1) 100%);
    background: -webkit-gradient(left top, right top, color-stop(0%, rgba(7,102,166,1)), color-stop(100%, rgba(0,148,89,1)));
    background: -webkit-linear-gradient(left, rgba(7,102,166,1) 0%, rgba(0,148,89,1) 100%);
    background: -o-linear-gradient(left, rgba(7,102,166,1) 0%, rgba(0,148,89,1) 100%);
    background: -ms-linear-gradient(left, rgba(7,102,166,1) 0%, rgba(0,148,89,1) 100%);
    background: linear-gradient(to right, rgba(7,102,166,1) 0%, rgba(0,148,89,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0766a6', endColorstr='#009459', GradientType=1 );
`;


