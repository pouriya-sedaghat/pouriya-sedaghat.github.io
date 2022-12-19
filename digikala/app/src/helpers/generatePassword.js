import { Random } from './random';
const ASCII_CODE = {
    number: { min: 48, max: 57 },
    upper: { min: 65, max: 90 },
    lower: { min: 97, max: 122 }
}
export const GeneratePassword = (type, counter) => {
    let generated_password = '';
    switch (type) {
        case 'number': {
            for (let i = 0; i < counter; i++) {
                generated_password += String.fromCharCode(Random(ASCII_CODE.number.min, ASCII_CODE.number.max));
            }
            break;
        }
        case 'upper': {
            for (let i = 0; i < counter; i++) {
                generated_password += String.fromCharCode(Random(ASCII_CODE.upper.min, ASCII_CODE.upper.max));
            }
            break;
        }
        case 'lower': {
            for (let i = 0; i < counter; i++) {
                generated_password += String.fromCharCode(Random(ASCII_CODE.lower.min, ASCII_CODE.lower.max));
            }
            break;
        }
        case 'mix': {
            let keys = Object.keys(ASCII_CODE);
            for (let i = 0; i < counter; i++) {
                let key = keys[Random(0, 2)];
                generated_password += String.fromCharCode(Random(ASCII_CODE[key].min, ASCII_CODE[key].max));
            }
            break;
        }
        default: throw Error('Not Valid');
    }
    return generated_password;
}