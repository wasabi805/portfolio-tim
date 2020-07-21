import { handleActions } from 'redux-actions';
import actions from '../Skills/Skills.actions';
import AbstractCode01 from '../../images/abrstract-code-01-1200-800.jpg';
import AbstractCode02 from '../../images/abrstract-code-02-1200-800.jpg';
import AbstractCode03 from '../../images/abstract-code-03-1200-800.jpg';

const initialStore = {
    cards: [
        {id : 'frameworks', title : "frameworks",
                list : [ 'react' , 'redux', 'material ui', 'bootstrap',
                    'jquery', 'handlebars', 'jest', 'enzyme' ],
            image: AbstractCode01,
        },

        { id: 'languages', title: 'languages',
            list: ['javascript' , 'html' , 'css' , 'sass'],
            image: AbstractCode02
        },

        { id: 'technology', title: 'technology',
            list: ['redux thunk' , 'redux saga' , 'API' , 'JSON'],
            image: AbstractCode03
        },
    ]
}

export default handleActions({
    [actions.somePlaceholder] : ( state ) =>({
        ...state
    })
}, initialStore)