import React from 'react';
import {string} from 'prop-types';
import styled from 'styled-components'

const Wrapper = styled.div `
width: 32%;
border: 2px solid #333;
border-radius: 4px;
margin-bottom: 25px;
padding-right: 10px;
overflow: hidden;
`
const Image = styled.img `
width: 40%;
float: left;
margin-right: 10px`

const ShowCard = props => (
    <Wrapper>
    <Image
      alt={`${props.title} Show Poster`}
      src={`public/img/posters/${props.poster}`}
    />
    <div>
      <h1>{props.title}</h1>
      <h2>({props.year})</h2>
      <p>{props.description}</p>
    </div>

  </Wrapper>
);

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
};
export default ShowCard;
