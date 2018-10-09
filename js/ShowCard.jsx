// @flow
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
width: 32%;
border: 2px solid #333;
border-radius: 4px;
margin-bottom: 25px;
padding-right: 10px;
overflow: hidden;
`;
const Image = styled.img`
width: 40%;
float: left;
margin-right: 10px`;

const ShowCard = (props: {
  poster: string,
  title: string,
  year: string,
  description: string
}) => (
  <Wrapper>
    <Image alt={`${props.title} Show Poster`} src={`public/img/posters/${props.poster}`} />
    <div>
      <h1>{props.title}</h1>
      <h2>({props.year})</h2>
      <p>{props.description}</p>
    </div>

  </Wrapper>
);

export default ShowCard;
