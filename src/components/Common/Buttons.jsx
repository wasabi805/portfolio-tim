import React from "react";
import PropTypes from 'prop-types';

export const Button = ({name , onClick , className})=>{
    return(
        <button
            className={className}
            onClick={onClick} >
            { name }
        </button>
    )
};

Button.defaultProps={
    className : undefined
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}