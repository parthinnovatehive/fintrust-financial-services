import { useState } from "react";

export function useMouseField() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
    active: false,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  const handleMouseLeave = () => {
    setMouse((prev) => ({
      ...prev,
      active: false,
    }));
  };

  return {
    mouse,
    handleMouseMove,
    handleMouseLeave,
  };
}