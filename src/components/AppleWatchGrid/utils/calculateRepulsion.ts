export function calculateRepulsion(
  currentIndex: number,
  positions: { x: number; y: number }[],
  scales: number[]
) {
  let offsetX = 0;
  let offsetY = 0;

  const current = positions[currentIndex];

  for (
    let otherIndex = 0;
    otherIndex < positions.length;
    otherIndex++
  ) {
    if (otherIndex === currentIndex) continue;

    const other = positions[otherIndex];

    const dx =
      current.x - other.x;

    const dy =
      current.y - other.y;

    const distance =
      Math.sqrt(dx * dx + dy * dy);

    const minDistance =
      95 *
      Math.max(
        scales[currentIndex],
        scales[otherIndex]
      );

    if (
      distance > 0 &&
      distance < minDistance
    ) {
      const force =
        (minDistance - distance) /
        minDistance;

      offsetX +=
        (dx / distance) *
        force *
        35;

      offsetY +=
        (dy / distance) *
        force *
        35;
    }
  }

  return {
    x: offsetX,
    y: offsetY,
  };
}