import React from 'react';
import {tileStyle} from "./Tile.styles";

const Tile = ()=>{
    return(
        <div className="tile-grid-container" >
            <div className="tile-grid-item">One</div>
            <div className="tile-grid-item">Two</div>
            <div className="tile-grid-item">Three</div>
        </div>
    )
}

export default Tile