// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
width: 32%;
border: 2px solid #333;
border-radius: 4px;
margin-bottom: 25px;
padding-right: 10px;
overflow: hidden;
color: black;
text-decoration: none;
`;

const Image = styled.img`
width: 40%;
float: left;
margin-right: 10px`;

const ShowCard = (props: Show) => (
    <Wrapper to= {`/details/${props.imdbID}`}>
    <Image alt={`${props.title} Show Poster`} src={`public/img/posters/${props.poster}`} />
    <div>
      <h1>{props.title}</h1>
      <h2>({props.year})</h2>
      <p>{props.description}</p>
    </div>

  </Wrapper>
);

export default ShowCard;
