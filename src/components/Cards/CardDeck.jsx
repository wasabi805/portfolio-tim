import React from 'react';
import { CardContainer, cardWrapper, cardBorder, CardStyle , CardImgWrapper , cardTitle, cardList } from './Card.styles';

export const CardDeck =({ cards })=>{
    const hasCards = cards !== undefined

    return(
        <div id={'card-container'} className={ CardContainer }>
            { hasCards && (cards.map( card => (
                <div key={`card-${card.id}`} className={ cardWrapper }>
                    <div className={cardBorder}>
                        <div className={CardStyle}>
                            <figure className={CardImgWrapper} >
                                <div>
                                    <h4 className={ cardTitle}>
                                        { card.id.toUpperCase() }
                                    </h4>
                                </div>
                                <img src={card.image}/>
                            </figure>

                            <div>
                                <ul className={ cardList }>
                                    {[card.list.join(' | ')].map( item =>(
                                        <li key={`card-list${ item }`}>{item}</li>
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

export default CardDeck