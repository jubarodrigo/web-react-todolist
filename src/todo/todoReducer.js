const INITIAL_STATE = {
    description: 'Ler Livro',
    list: [{
        __id: 1,
        description: 'Pagar cartao',
        done: true
    }, {
        __id: 2,
        description: 'Reuniao com equipe',
        done: true
    }, {
        __id: 3,
        description: 'Consulta medica',
        done: true
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}