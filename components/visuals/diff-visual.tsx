import { DiffSide, DiffStat, type DiffLine } from "@/components/visuals/code";
import { Visual } from "@/components/visuals/primitives";

type Side = (Omit<DiffLine, "o"> | null)[];

const before: Side = [
  { t: "ctx", n: 18, code: "export function invoiceTotal(invoice: Invoice, currency: Currency) {" },
  { t: "ctx", n: 19, code: "  let total = 0;" },
  { t: "ctx", n: 20, code: "  for (const item of invoice.items) {" },
  { t: "del", n: 21, code: "    total += convert(item.price, item.currency, currency);" },
  null,
  { t: "ctx", n: 22, code: "  }" },
  { t: "del", n: 23, code: "  return total;" },
  { t: "ctx", n: 24, code: "}" },
  { t: "ctx", n: 25, code: "" },
  { t: "ctx", n: 26, code: "export function formatTotal(invoice: Invoice, currency: Currency) {" },
  { t: "ctx", n: 27, code: "  const total = invoiceTotal(invoice, currency);" },
  { t: "del", n: 28, code: "  return `${total} ${currency}`;" },
  { t: "ctx", n: 29, code: "}" },
  { t: "ctx", n: 30, code: "" },
  { t: "ctx", n: 31, code: "export function isOverdue(invoice: Invoice, today: Date) {" },
  { t: "ctx", n: 32, code: "  return !invoice.paid && invoice.dueDate < today;" },
  { t: "ctx", n: 33, code: "}" },
];

const after: Side = [
  { t: "ctx", n: 18, code: "export function invoiceTotal(invoice: Invoice, currency: Currency) {" },
  { t: "ctx", n: 19, code: "  let total = 0;" },
  { t: "ctx", n: 20, code: "  for (const item of invoice.items) {" },
  { t: "add", n: 21, code: "    const price = item.price * item.quantity;" },
  { t: "add", n: 22, code: "    total += convert(price, item.currency, currency);" },
  { t: "ctx", n: 23, code: "  }" },
  { t: "add", n: 24, code: "  return roundToCents(total);" },
  { t: "ctx", n: 25, code: "}" },
  { t: "ctx", n: 26, code: "" },
  { t: "ctx", n: 27, code: "export function formatTotal(invoice: Invoice, currency: Currency) {" },
  { t: "ctx", n: 28, code: "  const total = invoiceTotal(invoice, currency);" },
  { t: "add", n: 29, code: "  return formatMoney(total, currency);" },
  { t: "ctx", n: 30, code: "}" },
  { t: "ctx", n: 31, code: "" },
  { t: "ctx", n: 32, code: "export function isOverdue(invoice: Invoice, today: Date) {" },
  { t: "ctx", n: 33, code: "  return !invoice.paid && invoice.dueDate < today;" },
  { t: "ctx", n: 34, code: "}" },
];

export function DiffVisual() {
  return (
    <Visual label="A side-by-side diff of src/invoice.ts with three removed lines on the left and four added lines on the right.">
      <div className="overflow-hidden rounded-[14px] border border-border bg-panel">
        <div className="flex h-11 items-center gap-4 border-b border-border px-4">
          <p className="font-mono text-xs text-strong sm:text-[13px]">src/invoice.ts</p>
          <DiffStat added={4} removed={3} />
        </div>
        <div className="grid pb-16 font-mono text-xs leading-6 sm:text-[13px] md:grid-cols-2">
          <DiffSide lines={before} />
          <DiffSide
            lines={after}
            className="border-t border-border md:border-t-0 md:border-l"
          />
        </div>
      </div>
    </Visual>
  );
}
