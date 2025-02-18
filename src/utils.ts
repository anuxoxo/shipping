export const destinations: {
  name: string,
  costMultiplier: number
}[] = [
    { name: "Sweden", costMultiplier: 7.35 },
    { name: "China", costMultiplier: 11.53 },
    { name: "Brazil", costMultiplier: 15.63 },
    { name: "Australia", costMultiplier: 50.09 },
  ];

export const hexToRgb = (hex: string): string => {
  let r: number = 0,
    g: number = 0,
    b: number = 0;

  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  }
  // 6 digits
  else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return `rgb(${r}, ${g}, ${b})`;
};
