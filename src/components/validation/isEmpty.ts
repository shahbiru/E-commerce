export const isEmpty = (value: string) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

  
export function kFormatter(num : number) {
  return Math.abs(num) > 999 ? Math.sign(num)*(Number((Math.abs(num)/1000).toFixed(1))) + 'k' : Math.sign(num)*Math.abs(num)
}