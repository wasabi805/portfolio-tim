import { getNestedProperty } from "../../helpers/objectUtils";

const getSkills = state => getNestedProperty( state , 'skills' || {} );

export default {
    skills : {
        data: state => getSkills( state ),
        list : state => getNestedProperty( getSkills(state) , 'cards')
    }
}