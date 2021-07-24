import React from "react";

interface IInvoice {
  id: number;
  name: string;
  total: string;
}
interface IInvoiceList {
  customerName: string;
  invoices: IInvoice[];
}

interface IInvoiceListProps {
  invoiceList: IInvoiceList;
  logo?: string;
}

const Invoice = (props: IInvoice) => {
  const { id, name, total } = props;

  return <h4>{`${id}: ${name} ---> ${total}`}</h4>;
};

const InvoiceList = (props: IInvoiceListProps) => {
  const { customerName, invoices } = props.invoiceList;
  return (
    <>
      <h1>{customerName}</h1>
      {invoices.map((invoice) => (
        <Invoice key={invoice.id} {...invoice} />
      ))}
    </>
  );
};

function App() {
  const data: IInvoiceList = {
    customerName: "Google",
    invoices: [
      { id: 123, name: "Dev work", total: "20.00" },
      { id: 223, name: "More Dev work", total: "20.00" },
      { id: 323, name: "Something different", total: "20.00" },
    ],
  };
  return (
    <div>
      <InvoiceList invoiceList={data} />
    </div>
  );
}

export default App;
