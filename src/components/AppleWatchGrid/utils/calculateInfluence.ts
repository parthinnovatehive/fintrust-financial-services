export function calculateInfluence(
  bubbleX: number,
  bubbleY: number,
  mouseX: number,
  mouseY: number,
  active: boolean
) {
  if (!active) {
    return {
      scale: 1,
      offsetX: 0,
      offsetY: 0,
    };
  }

  const dx = mouseX - bubbleX;
  const dy = mouseY - bubbleY;

  const distance = Math.sqrt(
    dx * dx + dy * dy
  );

  const radius = 250;

  if (distance > radius) {
    return {
      scale: 1,
      offsetX: 0,
      offsetY: 0,
    };
  }

  const strength =
    1 - distance / radius;

  return {
    scale: 1 + strength * 0.8,

    offsetX:
  distance === 0
    ? 0
    : (dx / distance) *
      strength *
      18,

offsetY:
  distance === 0
    ? 0
    : (dy / distance) *
      strength *
      18,
  };
}