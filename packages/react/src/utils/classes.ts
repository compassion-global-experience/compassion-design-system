/**
 * Get classes from a map of classes and a list of mappings
 * @param map - typically a styles import object from a css module
 * @param input - a key or a list of keys from the map to include in the returned string
 * @param className - a class name to append to the returned string
 */
export const getClasses = (
  map: Record<string, string>,
  input: string | string[],
  className?: string,
): string => {
  const mappings = (Array.isArray(input) ? input : [input]).filter(Boolean);
  const mapped = mappings.map((key) => map[key]).filter(Boolean);
  if (process.env.NODE_ENV !== 'production') {
    if (mapped.length !== mappings.length) {
      const missing = mappings.filter((key) => !map[key]);
      console.warn(`Failed to map classes for: ${missing.join(', ')}`);
    }
  }

  if (className) {
    mapped.push(className);
  }

  return mapped.join(' ');
};
