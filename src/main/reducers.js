import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: ({
        description: 'Ler Livro',
        list: [{
            __id: 1,
            description: 'Pagar cartao',
            done: true
        },{
            __id: 2,
            description: 'Reuniao com equipe',
            done: true
        },{
            __id: 3,
            description: 'Consulta medica',
            done: true
        }]
    })
})

export default rootReducer