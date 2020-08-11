import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

const SvgIconSocial = ({icon , theme , link})=>(
    <span className={ cx( theme.iconWrapper )}>
        <span>
           <a href={ link }>
               {icon}
           </a>
        </span>
    </span>)

SvgIconSocial.defaultProps={
    link: "",
    theme:{
        iconWrapper : "",
    }
}

SvgIconSocial.propTypes={
    icon: PropTypes.shape({}).isRequired,
    link: PropTypes.string,
    theme: PropTypes.shape({
        iconWrapper: PropTypes.shape({}) || PropTypes.string
    })
}

export default SvgIconSocial