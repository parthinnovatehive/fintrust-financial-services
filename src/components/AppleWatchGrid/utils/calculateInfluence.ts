export function calculateInfluence(
  bubbleX: number,
  bubbleY: number,
  bubbleSize: number,
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

  const centerX =
    bubbleX + bubbleSize / 2;

  const centerY =
    bubbleY + bubbleSize / 2;

  const dx = mouseX - centerX;
  const dy = mouseY - centerY;

  const distance = Math.sqrt(
    dx * dx + dy * dy
  );

  const radius = 180;

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
    scale: 1 + strength * 0.9,

    offsetX:
      distance === 0
        ? 0
        : (dx / distance) *
          strength *
          20,

    offsetY:
      distance === 0
        ? 0
        : (dy / distance) *
          strength *
          20,
  };
}