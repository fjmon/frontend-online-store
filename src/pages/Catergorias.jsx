import React from 'react';
import PropTypes from 'prop-types';
import CategoriaCard from '../components/CategoriaCard';
import { getCategories } from '../services/api';

class Categorias extends React.Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };
  }

  componentDidMount = async () => {
    const categorias = await getCategories();
    this.setState({ categorias });
  }

  onChangeValue = (event) => {
    const { salvaCategoria } = this.props;
    const { value } = event.target;
    salvaCategoria(value);
  }

  render() {
    const { categorias } = this.state;
    return (
      <div onChange={ this.onChangeValue }>
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
  salvaCategoria: PropTypes.func,
}.isRequired;

export default Categorias;
