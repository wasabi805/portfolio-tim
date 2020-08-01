import React from 'react';
import PropTypes from 'prop-types';
import { getNavBodyStyles } from './Navigation.styles';
import { COMP_NAME_HOME , COMP_NAME_ACBA} from '../../constants/routeConstants';
import { Button } from '../Common/Buttons';

const Navigation = ({ goHome, goAcba })=>{

    return(
        <nav className={ getNavBodyStyles }>
            <Button
                onClick={ goHome }
                name={ COMP_NAME_HOME }
            />
            <Button
                onClick={ goAcba }
                name={COMP_NAME_ACBA}
            />
        </nav>
    )
};

Navigation.propTypes={
    goHome : PropTypes.func.isRequired,
    goAcba : PropTypes.func.isRequired,
}

export default Navigation