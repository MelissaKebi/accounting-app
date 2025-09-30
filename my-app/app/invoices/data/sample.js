// Minimal demo data used by all pages.
// In a real app you'll fetch this from your API or DB.
const sampleInvoice = {
  seller: {
    name: "Deep Care GmbH",
    addressLines: ["Königsallee 43", "71638 Ludwigsburg", "Germany"],
    website: "www.deep-care.de",
    contact: {
      name: "Simon Fiechtner",
      phone: "+49 151 29091956",
      email: "simon.fiechtner@deep-care.de",
    },
  },
  buyer: {
    name: "Swisscom (Schweiz) AG",
    lines: [
      "z.Hd. Susanne Schüpbach (HR)",
      "Genfergasse 14",
      "3006 Bern",
      "Switzerland",
    ],
  },
  meta: {
    number: "R-26614",
    dateISO: "2025-09-29T00:00:00.000Z",
  },
  contract: {
    contractNo: "A-35902",
    usagePeriod: "19.10.2024 – 17.11.2024", // Usage period shown as a yellow pill in Positions, too
  },
  items: [
    {
      pos: 1,
      description: "Deep Care ISA Pilot",
      quantity: 1,
      unit: "Dienstleistung",
      unitPriceNet: 1000,
    },
    {
      pos: 2,
      description: "Onboarding & Support",
      quantity: 1,
      unit: "Pauschale",
      unitPriceNet: 350,
    },
  ],
  taxRate: 0.19,
};

export default sampleInvoice;
