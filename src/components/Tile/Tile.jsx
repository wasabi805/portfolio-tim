import React from 'react';
import PropTypes from 'prop-types';
import { isEvenIndex } from '../../helpers/types';
import { getTileImageStyle , tileContextStyle } from './Tile.styles';

const TileContext = ({ title ,context })=>{
    return(
        <div className={tileContextStyle}>
            <h3>{ title }</h3>
            <p>{ context }</p>
        </div>
    )
}
const TileImage =({image : url} )=>{
    return(
        <div className={getTileImageStyle( url)}/>
    )
}
const Tile = ({ content })=>{
    return(
        <>
            <div className="tile-grid-container" >
            {content.map( (project , idx)=> {
                if( isEvenIndex(idx) ){
                    return (
                        <div className="tile-grid-item img-left" >
                            <TileImage image={content[idx].image} />
                            <TileContext title={content[idx].title} context={content[idx].context }/>
                        </div>
                    )
                }else{
                    return (
                        <div className="tile-grid-item img-right">
                            <TileContext title={content[idx].title} context={content[idx].context }/>
                            <TileImage image={content[idx].image} />
                        </div>
                    )
                }
            })}
            </div>
        </>
    )
}

Tile.propTypes = {
    content : PropTypes.arrayOf(
        PropTypes.shape({
            image : PropTypes.string,
            title : PropTypes.string,
            context: PropTypes.string,
        }).isRequired
    )
};

export default Tile