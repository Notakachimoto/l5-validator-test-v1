export default class ArraySchema {
    validators = [(value) => Array.isArray(value)];
    isValid(value) {
        return this.validators.every((validator) => validator(value) === true);
        
    }
    length() {
        const validator = (value) => value.length === this.validators.length;
        this.validators.push(validator);
        return this
    }
}