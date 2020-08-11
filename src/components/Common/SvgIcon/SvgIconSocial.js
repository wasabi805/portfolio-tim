import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

const SvgIconSocial = ({icon , theme})=>(
    <span className={ cx( theme.iconWrapper ) }>
        <span>
            {icon}
        </span>
    </span>)

SvgIconSocial.propTypes={
    icon: PropTypes.shape({}),
    theme: PropTypes.shape({
        iconWrapper: PropTypes.shape({}) || PropTypes.string
    })
}

export default SvgIconSocial