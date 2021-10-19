import { nanoid } from 'nanoid';

export const id = () => {
  return nanoid();
};

export const gdsId = () => {
  return `gds-${nanoid()}`;
};

export * from './color';
