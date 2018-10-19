// @flow
import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

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
margin-right: 10px;
`;

class ShowCard extends Component {

    shouldComponentUpdate() {
        return false;
    }

  props: Show;

  render() {
      return (
      <Wrapper to={`/details/${this.props.imdbID}`}>
        <Image
          alt={`${this.props.title} Show Poster`}
          src={`public/img/posters/${this.props.poster}`}
        />
        <div>
          <h1>{this.props.title}</h1>
          <h2>({this.props.year})</h2>
          <p>{this.props.description}</p>
        </div>

      </Wrapper>
    );
  }
}

export default ShowCard;
