export function hasProperty(object: mixed, propertyName: string): boolean %checks {
    // $FlowFixMe
    return Boolean(object) && Reflect.apply(Object.prototype.hasOwnProperty, object, [propertyName]);
}

export function hasStringNonEmptySymbols(value: mixed): boolean %checks {
    return typeof value === 'string' && value.trim().length > 0;
}

export function hasEmailSymbol(value: string): boolean {
    return value.includes('@');
}
