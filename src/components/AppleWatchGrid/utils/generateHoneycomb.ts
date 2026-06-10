export const generateHoneycomb = (
  count: number
) => {
  const positions = [];

  const spacingX = 120;
  const spacingY = 105;

  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / 8);
    const col = i % 8;

    positions.push({
      x:
        col * spacingX +
        (row % 2 ? spacingX / 2 : 0),

      y:
        row * spacingY,
    });
  }

  return positions;
};