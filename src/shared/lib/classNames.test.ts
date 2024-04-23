import { classNames } from './classNames';

describe('classNames', () => {
    test('with only firs param', () => {
        expect(classNames('some')).toBe('some');
    });
    test('with additional classes', () => {
        expect(classNames('some', {}, ['class1', 'class2'])).toBe('some class1 class2');
    });
    test('with mods is true', () => {
        expect(classNames('some', { mod1: true, mod2: true }, ['class1', 'class2']))
            .toBe('some mod1 mod2 class1 class2');
    });
    test('with mods is true and false', () => {
        expect(classNames('some', { mod1: true, mod2: false, mod3: true }, ['class1', 'class2']))
            .toBe('some mod1 mod3 class1 class2');
    });
});
