import React from 'react';
import PropTypes from 'prop-types';
import CardDeck from './CardDeck'

const CardDeckContainer = ({cards}) =>(
    <CardDeck cards={cards}/>);

CardDeckContainer.propTypes={
    cards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        title: PropTypes.string.isRequired,
    }))
};

export default CardDeckContainer