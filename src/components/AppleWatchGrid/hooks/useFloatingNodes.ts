import { useMemo } from "react";

export function useFloatingNodes(
  count: number
) {
  return useMemo(
    () =>
      Array.from(
        { length: count },
        () => ({
          amplitude:
            4 + Math.random() * 6,

          duration:
            4 + Math.random() * 4,

          delay:
            Math.random() * 3,
        })
      ),
    [count]
  );
}