import { getNestedProperty } from '../../helpers/objectUtils';

const getExperience = state => {
    return getNestedProperty(state , 'experience') || {};
}

export default {
    experience:{
        data : state => getExperience( state ),
        slides: state => getNestedProperty( getExperience( state ) , 'slides')
    }
}