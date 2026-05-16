const MONTHS_SHORT = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
const MONTHS_LONG  = ["January","February","March","April","May","June","July","August","September","October","November","December"];

/** "may 2026" — fixed 3-char month, safe for fixed-width ASCII art */
export function availabilityShort(): string {
  const d = new Date();
  return `${MONTHS_SHORT[d.getMonth()]} ${d.getFullYear()}`;
}

/** "May 2026" — full month name for prose text */
export function availabilityLong(): string {
  const d = new Date();
  return `${MONTHS_LONG[d.getMonth()]} ${d.getFullYear()}`;
}
