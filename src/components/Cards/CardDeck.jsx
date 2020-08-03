import React from 'react';
import PropTypes from 'prop-types';
import { CardContainer, cardWrapper, cardBorder, CardStyle ,
    CardImgWrapper , cardTitle, cardList } from './Card.styles';

export const CardDeck =({ cards })=>{
    const hasCards = cards !== undefined

    return(
        <div className={ CardContainer }>
            { hasCards && (cards.map( card => (
                <div key={`card-${card.id}`} className={ cardWrapper } >
                    <div className={ cardBorder }>
                        <div className={ CardStyle }>
                            <figure className={ CardImgWrapper }>
                                <div>
                                    <h4 className={ cardTitle }>
                                        { card.id.toUpperCase() }
                                    </h4>
                                </div>
                                <img src={card.image}/>
                            </figure>

                            <div>
                                <ul className={ cardList }>
                                    {[card.list.join(' | ')].map( item =>(
                                        <li key={`card-list${ item }`}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            )))}
        </div>
    )
}

CardDeck.propTypes={
    cards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        title: PropTypes.string.isRequired,
    }))
};
export default CardDeck