export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export * from './components';
export * from './cds-tokens';
