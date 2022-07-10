import React from 'react';
import PropTypes from 'prop-types';

class DetalhesDoProduto extends React.Component {
  constructor() {
    super();
    this.state = {
      categoria: [],
    };
  }

  componentDidMount() {
    this.carregarInfos();
  }

  carregarInfos = () => {
    const { productsID } = this.props;
    this.setState({
      categoria: productsID[0],
    });
  };

  render() {
    const { categoria } = this.state;
    return (
      <div data-testid="product">
        <div>
          <span data-testid="product-detail-name">{ categoria.title }</span>
          <span>{categoria.price}</span>
          <img src={ categoria.thumbnail } alt={ categoria.title } />
        </div>
        <div>Especificações Técnicas</div>
      </div>
    );
  }
}
DetalhesDoProduto.propTypes = {
  categoriaSelecionada: PropTypes.string,
}.isRequired;

export default DetalhesDoProduto;
