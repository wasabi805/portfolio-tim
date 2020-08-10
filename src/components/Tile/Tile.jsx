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

const TileImage =( {id, image : url, animation} )=>{
    return(
        <div id={`${ id }-image`}
                 className={ cx(getTileImageStyle( url), animation) }
        >
            <span className={ tileImageOverlay }/>
        </div>)
}

const TileContext = ({id, title ,context , animation })=>(
    <span id={`${id}-context`} className={ tileContextStyle }>
        <strong id={`${id}-title`}
            className={cx(animation )}
            data-text={ title }
        >{ title }
        </strong>
        <span>{ context }</span>
    </span>
)

const Tile = ({ content})=>{
    const isMobile = useMediaQuery( BREAKPOINTS.MOBILE );
    const isTablet = useMediaQuery( BREAKPOINTS.TABLET )
    const isLaptop = useMediaQuery( BREAKPOINTS.LAPTOP );
    const isDesktop = useMediaQuery( BREAKPOINTS.DESKTOP );

    const [selectedTile , setSelectedTile] = useState();

    const onTileHover = (e)=>{
        e.persist()
        setSelectedTile( e.currentTarget.id)
    }

    return(
        <div className={tileGridContainerStyle}>
            {(isLaptop || isTablet || isDesktop) && (
                <>
                    {content && content.map( (project , idx)=> {
                        if( isEvenIndex(idx) ){
                            return (
                               <a href={project.href} style={{zIndex: 10}}>
                                    <span
                                        key={ `project-${project.id}` }
                                        id={ project.id }
                                        className={ cx(tileGridItem, imgLeftStyle )}
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
                                </span>
                               </a>
                            )
                        }
                        else{
                            return (
                                <a href={project.href} style={{zIndex: 10}}>
                                    <span
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
                                    </span>
                                </a>
                            )
                        }
                    }) }
                </>
            )}

            {isMobile && (
                <>
                    {content && content.map( (project , idx)=> (
                        <div key={`project-${project.id}`} id={ project.id } className={ cx(tileGridItem, imgLeftStyle )}>
                            { (project.hasMobileImg  ? <TileImage image={ content[idx].hasMobileImg }/> : <TileImage image={ content[idx].image }/> )}
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