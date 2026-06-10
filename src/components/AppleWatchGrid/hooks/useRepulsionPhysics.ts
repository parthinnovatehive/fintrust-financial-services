import { calculateRepulsion } from "../utils/calculateRepulsion";

export function useRepulsionPhysics(
  positions: { x: number; y: number }[],
  scales: number[]
) {
  return positions.map(
    (_, index) =>
      calculateRepulsion(
        index,
        positions,
        scales
      )
  );
}