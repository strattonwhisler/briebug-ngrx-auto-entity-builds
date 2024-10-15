export declare const lowerCase: (value: any) => string;
export declare const upperCase: (value: any) => string;
export declare const lowerCaseFirst: (value: any) => string;
export declare const upperCaseFirst: (value: any) => string;
export declare const noCase: (str: string) => string;
/**
 * Camel case a string.
 *
 * @param  str: string to convert
 * @param  mergeNumbers: flag indicating whether to merge numbers
 * @return camel cased string
 */
export declare const camelCase: (str: string, mergeNumbers?: boolean) => string;
/**
 * Pascal case a string.
 *
 * @param  str: string to convert
 * @param  mergeNumbers: flag indicating whether to merge numbers
 * @return pascal cased string
 */
export declare const pascalCase: (str: string, mergeNumbers?: boolean) => string;
