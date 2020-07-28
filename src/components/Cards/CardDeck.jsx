import React from 'react';
import { cx } from 'emotion';
import { CardContainer, cardWrapper, CardStyle , CardImgWrapper, endAlign, startAlign } from './Card.styles';

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

                            <h3 style={{
                                position: 'absolute',
                                display: 'inline-block',
                                marginLeft: '2vw',
                                marginTop: '5vh',
                                fontSize: '1.7vw',
                                zIndex: 9,
                            }}>
                                { card.id.toUpperCase() }
                            </h3>

                            <figure className={CardImgWrapper}>
                                <div/>
                                <img src={card.image}/>
                            </figure>

                            <div >
                                {card.list.map( item =>(
                                    listItem({ item }))).reduce( splitList, [])
                                    .map( rowContent => (
                                            <ul className={ cx((
                                                rowContent.length %2 === 0 ? endAlign: startAlign))}
                                            >{ rowContent }</ul>
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