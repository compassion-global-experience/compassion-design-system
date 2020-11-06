export const space = (step) => {
  const multiplier = 16;
  const spacings = [
    0.125,
    0.25,
    0.5,
    0.75,
    1,
    1.5,
    2,
    2.5,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ];

  return `${spacings[step] * multiplier}px`;
};
