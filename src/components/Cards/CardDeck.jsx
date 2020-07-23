import React from 'react';
import { CardContainer, cardWrapper, CardStyle , CardImgWrapper } from './Card.styles';

export const CardDeck =({ cards })=>{
    const groupBy = 4

    const listItem = ({ item }) => <li>{ item.toUpperCase() }</li>

    const splitList = ( r, element, index)=>{
        index % groupBy === 0 && r.push([]);
        r[r.length - 1].push( element );
        return r;
    }

    return(
        <div id={'card-container'} className={ CardContainer } >
            { cards.map( card => {
                return(
                    <div className={ cardWrapper }>
                        <div className={CardStyle}>
                            <figure className={CardImgWrapper}>
                                <div/>
                                <img src={card.image}/>
                            </figure>

                            <div >
                                <h3>
                                    { card.id.toUpperCase() }
                                </h3>

                                {card.list.map( item =>(
                                    listItem({ item }))).reduce( splitList, [])
                                    .map( rowContent => (
                                            <ul>{ rowContent }</ul>
                                        ))
                                }
                            </div>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default CardDeck