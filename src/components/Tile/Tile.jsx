import React  from 'react';
import { cx } from 'emotion';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isEvenIndex } from '../../helpers/types';
import {
    getTileImageStyle ,
    tileImageOverlay,
    tileTitle,
    tileContextStyle ,
    tileGridContainerStyle,
    tileGridItem,
    imgLeftStyle,
    imgRightStyle,

} from './Tile.styles';
import {media} from "../../enums/media";
import DevConnectorMobile from "../../images/devconnector-mobile.png";

const TileImage =({image : url} )=>(
    <div id="tileImage"
         className={ getTileImageStyle( url) }
    >
        <div className={ tileImageOverlay }/>
    </div>)

const TileContext = ({ title ,context })=>(
    <div className={ tileContextStyle }>
        <h3
            // className={cx("glitch" , tileTitle )}
            // data-text={ title }
        >{ title }
        </h3>
        <p>{ context }</p>
    </div>
)

const Tile = ({ content, mobileImages })=>{

    const isMobile = useMediaQuery({ query: media.MOBILE });
    const isLaptop = useMediaQuery({ query: media.LAPTOP });

    return(
        <div className={tileGridContainerStyle} >
            {isLaptop && (
                <>
                    { content.map( (project , idx)=> {
                        if( isEvenIndex(idx) ){
                            return (
                                <div
                                    id={ project.id }
                                    className={ cx(tileGridItem, imgLeftStyle )}
                                >
                                    <TileImage image={ content[idx].image }/>
                                    <TileContext title={ content[idx].title } context={ content[idx].context }/>
                                </div>
                            )
                        }else{
                            return (
                                <div
                                    id={ project.id }
                                    className={ cx(tileGridItem, imgRightStyle)}
                                >
                                    <TileContext
                                        title={ content[idx].title }
                                        context={ content[idx].context }
                                    />
                                    <TileImage image={ content[idx].image } />
                                </div>
                            )
                        }
                    }) }
                </>
            )}

            {isMobile && (
                <>
                    {content.map( (project , idx)=> (
                        <div id={ project.id } className={ cx(tileGridItem, imgLeftStyle )}>
                            { (project.hasMobileImg  ?
                                <TileImage image={ content[idx].hasMobileImg }/> :
                                <TileImage image={ content[idx].image }/> )}
                            <TileContext title={ content[idx].title } context={ content[idx].context }/>
                        </div>
                    ))}
                </>
            )}


        </div>
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