type GetClassInput = string | null | undefined | false;

/**
 * Get classes from a map of classes and a list of mappings
 * @param map - typically a styles import object from a css module
 * @param input - a key or a list of keys from the map to include in the returned string
 * @param className - a class name to append to the returned string
 */
export const getClasses = (
  map: Record<string, string>,
  input?: GetClassInput | GetClassInput[],
  className?: string,
): string => {
  const mappings: string[] = [];
  if (Array.isArray(input)) {
    input.forEach((it) => {
      if (typeof it === 'string' && it.length > 0) {
        mappings.push(it);
      }
    });
  } else if (input) {
    mappings.push(input);
  }
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
