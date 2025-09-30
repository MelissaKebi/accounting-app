import SectionShell from "../components/SectionShell";
import ContractData from "../components/ContractData";
import sampleInvoice from "../data/sample";

export default function ContractPage() {
  return (
    <SectionShell title="Contract data & Usage period">
      <ContractData contract={sampleInvoice.contract} />
    </SectionShell>
  );
}
