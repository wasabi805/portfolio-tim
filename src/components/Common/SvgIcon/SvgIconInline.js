import React from 'react';
import PropTypes from 'prop-types';
import { cx, css } from 'emotion';

const SvgIconInline = ({ theme , svg, text })=>(
    <div className={cx(theme.iconWrapper)}>
        <p className={ cx(theme.iconText , css({display: 'flex', alignItems: 'center' })) }>
            <span className={ cx(theme.svgWrapper) } >
                <span className={ cx( theme.svgContainer ) }  >
                    { svg }
                </span>
            </span> { text }</p>
    </div>
)

SvgIconInline.defaultProps={
    iconWrapper: "",
    svgWrapper: "",
    svgContainer: "",
    iconText:"",
}

SvgIconInline.propTypes={
    theme: PropTypes.shape({
        iconWrapper:  PropTypes.arrayOf({} || PropTypes.string ),
        svgWrapper: PropTypes.arrayOf({} || PropTypes.string ),
        svgContainer:PropTypes.arrayOf({} || PropTypes.string ),
        iconText: PropTypes.arrayOf({} || PropTypes.string ),
        svg: PropTypes.arrayOf({} || PropTypes.string ).isRequired,
        text: PropTypes.string,
    })
}

export default SvgIconInline