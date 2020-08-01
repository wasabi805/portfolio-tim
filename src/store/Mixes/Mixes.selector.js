import { getNestedProperty } from "../../helpers/objectUtils";

const getMixes = state => {
    return getNestedProperty( state, 'mixes' || {})
}

export default {
    mixes : {
        data: state => getMixes( state ),
        trackData: state => getNestedProperty( getMixes( state ), 'trackData' ),
        initialTrack: state => getNestedProperty( getMixes( state ),'trackData'),
    },


}