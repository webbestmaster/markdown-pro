// @flow

export function hasProperty(object: mixed, propertyName: string): boolean %checks {
    // $FlowFixMe
    return Boolean(object) && Reflect.apply(Object.prototype.hasOwnProperty, object, [propertyName]);
}
