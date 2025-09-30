// Format numbers like "1.332,80 €" (German locale)
export const eur = (n) =>
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    Number(n || 0)
  );

// Format date like "29. September 2025"
export const deDate = (iso) =>
  new Date(iso).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
