import React from "react";
import { useParams } from "react-router-dom";
import { getInvoiceData } from "../../utils/InvoiceData";

const Invoice = () => {
  let params = useParams();
  let invoice = getInvoiceData(parseInt(params.invoiceNumber));

//   console.log(invoice);
//   console.log(params);
  return (
    <main
      style={{
        padding: "1rem",
        border: "2px solid green",
        width: "500px",
        margin: "auto",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h2>Total Due: <span style={{color:"red"}}>{invoice.amount}</span></h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
};

export default Invoice;
