import React from 'react';
import { getNavBodyStyles } from "./Navigation.styles";
import { COMP_NAME_HOME , COMP_NAME_ACBA} from "../../constants/routeConstants";
import { Button } from "../Common/Buttons";

const Navigation = ({goHome, goAcba})=>{

    return(
        <nav className={ getNavBodyStyles }>
            <Button
                onClick={goHome}
                name={ COMP_NAME_HOME }
            />
            <Button
                onClick={goAcba}
                name={COMP_NAME_ACBA}
            />
        </nav>
    )
};
export default Navigation