import React, { useState } from 'react';
import { cx } from 'emotion';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { BREAKPOINTS } from '../../media-queries/Breakpoints';
import { isEvenIndex } from '../../helpers/types';
import {
    getTileImageStyle ,
    zoomIMage,
    tileImageOverlay,
    tileContextStyle ,
    tileGridContainerStyle,
    tileGridItem,
    imgLeftStyle,
    imgRightStyle,
} from './Tile.styles';

const TileImage =( {id, image : url, animation} )=>(
    <div id={`${ id }-image`}
         className={ cx(getTileImageStyle( url), animation) }
    >
        <div className={ tileImageOverlay }/>
    </div>)

const TileContext = ({id, title ,context , animation })=>(
    <div id={`${id}-context`} className={ tileContextStyle }>
        <h5 id={`${id}-title`}
            className={cx(animation )}
            data-text={ title }
        >{ title }
        </h5>
        <p>{ context }</p>
    </div>
)

const Tile = ({ content })=>{

    const isMobile = useMediaQuery( BREAKPOINTS.MOBILE );
    const isTablet = useMediaQuery( BREAKPOINTS.TABLET )
    const isLaptop = useMediaQuery( BREAKPOINTS.LAPTOP);

    const [selectedTile , setSelectedTile] = useState();

    const onTileHover = (e)=>{
        e.persist()
        setSelectedTile( e.currentTarget.id)
        console.log(selectedTile)
    }

    return(
        <div className={tileGridContainerStyle}>
            {(isLaptop || isTablet) && (
                <>
                    { content.map( (project , idx)=> {
                        if( isEvenIndex(idx) ){
                            return (
                                <div
                                    key={ `project-${project.id}` }
                                    id={ project.id }
                                    className={ cx(tileGridItem, imgLeftStyle , )}
                                    onMouseOver={ (e)=>onTileHover(e)}
                                    onMouseOut={()=>setSelectedTile(null)}
                                >
                                    <TileImage
                                        id={ content[idx].id }
                                        image={ content[idx].image }
                                        animation={ (selectedTile === project.id) && zoomIMage }
                                    />
                                    <TileContext
                                        id={ content[idx].id }
                                        title={ content[idx].title }
                                        context={ content[idx].context }
                                        animation={(selectedTile === project.id) && 'glitch' }
                                    />
                                </div>
                            )
                        }
                        else{
                            return (
                                <div
                                    key={ `project-${project.id}` }
                                    id={ project.id }
                                    className={ cx(tileGridItem, imgRightStyle)}
                                    onMouseOver={ (e)=>onTileHover(e)}
                                >
                                    <TileContext
                                        id={ content[idx].id }
                                        title={ content[idx].title }
                                        context={ content[idx].context }
                                        animation={(selectedTile === project.id) && 'glitch' }
                                    />
                                    <TileImage
                                        id={ content[idx].id }
                                        image={ content[idx].image }
                                        animation={ (selectedTile === project.id) && zoomIMage }
                                    />
                                </div>
                            )
                        }
                    }) }
                </>
            )}

            {isMobile && (
                <>
                    {content.map( (project , idx)=> (
                        <div key={`project-${project.id}`} id={ project.id } className={ cx(tileGridItem, imgLeftStyle )}>
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