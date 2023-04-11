/**
 * Get classes from a map of classes and a list of mappings
 * @param map - typically a styles import object from a css module
 * @param input - a key or a list of keys from the map to include in the returned string
 * @param className - a class name to append to the returned string
 */
export declare const getClasses: (map: Record<string, string>, input: string | string[], className?: string) => string;
