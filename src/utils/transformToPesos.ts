export default function transformToPesos(value: number): string {
  return value.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
  });
}
