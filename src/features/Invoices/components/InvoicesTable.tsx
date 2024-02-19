import { MONTHS } from "../../../components/common/DateFilters/monthsAndYears";
import { Invoice } from "../models/invoice";

interface InvoicesTableProps {
  invoices: Invoice[];
}

const InvoicesTable = ({ invoices }: InvoicesTableProps) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            Date
          </th>
          <th scope="col" className="py-3 px-6">
            Amount Earned
          </th>
        </tr>
      </thead>

      <tbody>
        {invoices.map((invoice, index) => (
          <Row key={index} invoice={invoice} />
        ))}
      </tbody>
    </table>
  );
};

interface RowProps {
  invoice: Invoice;
}

const Row = ({ invoice }: RowProps) => {
  return (
    <tr className="bg-white border-b text-black dark:text-white dark:bg-gray-800 dark:border-gray-700">
      <td className="py-4 px-6">
        {MONTHS[invoice.month]} {invoice.year}
      </td>
      <td className="py-4 px-6">${invoice.amount}</td>
    </tr>
  );
};

export default InvoicesTable;
