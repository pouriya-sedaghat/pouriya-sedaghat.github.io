export const counter = (state, action) => {
    switch (action.type) {
        case 'PLUS': { return { counter: ++state.counter } }
        case 'MINUS': { return { counter: --state.counter } }
        case '1': { return { counter: 0 } }
        case '2': { return { counter: 1 } }
        case '3': { return { counter: 2 } }
        case '4': { return { counter: 3 } }
        case '5': { return { counter: 4 } }
        case '6': { return { counter: 5 } }
        case '7': { return { counter: 6 } }
        case '8': { return { counter: 7 } }
        case '9': { return { counter: 8 } }
        default: throw Error('hello noob');
    }
}