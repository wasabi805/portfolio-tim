import { getNestedProperty } from "../../helpers/objectUtils";

export default {
    cards : state => getNestedProperty( state , 'skills' , 'cards' )
}