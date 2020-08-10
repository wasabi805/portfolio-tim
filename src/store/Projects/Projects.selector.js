import { getNestedProperty } from '../../helpers/objectUtils';

const getProjects = state => {
    return getNestedProperty(state , 'projects') || {} ;
}

export default {
    projects: state => getProjects( state ),
}