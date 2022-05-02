import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorFound from "../components/error/ErrorFound.jsx";
import Expense from "../components/expense/Expense.jsx";
import Home from "../components/home/Home";
import Invoice from "../components/invoice/Invoice.jsx";
import Invoices from "../components/invoice/Invoices";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/invoices" element={<Invoices />}>
            <Route path = ":invoiceNumber" element={<Invoice />}/>
        </Route>
        <Route path="expenses" element={<Expense />} />
        <Route path="*" element={<ErrorFound />} />
      </Route>
    </Routes>
  );
};

export default Routing;
