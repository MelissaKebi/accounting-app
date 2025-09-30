import InvoiceHeader from "../components/InvoiceHeader";
import CompanyResponsible from "../components/CompanyResponsible";
import ContractData from "../components/ContractData";
import PositionsTable from "../components/PositionTable";
import sampleInvoice from "../data/sample.js";
import PrintButton from "../../../components/ui/PrintButton";
import InvoiceDoc from "../components/InvoiceDocument";

export default function FullInvoicePage() {
  return (
    <main className="mx-auto max-w-a4 p-6">
      <div className="no-print mb-4 flex items-center justify-end">
        <PrintButton /> {/* ✅ safe now */}
      </div>
      <InvoiceDoc invoice={sampleInvoice} />
      {/* <div className="space-y-8 rounded bg-white p-6 shadow-sm print:shadow-none">
        <InvoiceHeader
          seller={sampleInvoice.seller}
          buyer={sampleInvoice.buyer}
          meta={sampleInvoice.meta}
        />
        <CompanyResponsible contact={sampleInvoice.seller.contact} />
        <ContractData contract={sampleInvoice.contract} />
        <PositionsTable
          items={sampleInvoice.items}
          contract={sampleInvoice.contract}
        />
      </div> */}
    </main>
  );
}
