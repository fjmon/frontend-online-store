import React from 'react';
import PropTypes from 'prop-types';
import CategoriaCard from '../components/CategoriaCard';

class Categorias extends React.Component {
  render() {
    const { categorias, handleChange } = this.props;
    return (
      <div onChange={ handleChange }>
        {
          categorias.map((categoria, index) => (
            <CategoriaCard key={ index } categoria={ categoria } />
          ))
        }
      </div>
    );
  }
}

Categorias.propTypes = {
  categorias: PropTypes.array,
}.isRequired;

export default Categorias;
