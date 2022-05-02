import React from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../../utils/InvoiceData";

const Invoices = () => {
  let invoicesData = getInvoices();

  // const[input,setInput] = useState("");

  let [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    let search = e.target.value;
    if (search) {
      setSearchParams({ search });
    } else {
      setSearchParams({});
    }
    // setInput(search)
  };

  // const hanldeSubmit = () => {
  //   let search = input;
  //   if(search){
  //     setSearchParams({ search });
  //     console.log(searchParams.get("search"))
  //   } else{
  //     setSearchParams({});
  //   }
  // }

  return (
    <>
      <div className="input-group flex-nowrap mb-3 mt-2">
        <span className="input-group-text" id="addon-wrapping">
          Search
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Text"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          value={searchParams.get("search") || ""}
          // value={input}
          onChange={handleChange}
        />
        {/* <button onClick={hanldeSubmit}>SEARCH</button> */}
      </div>
      <table className="table">
        <thead>
          <tr className="table-secondary">
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Amount</th>
            <th scope="col">Due</th>
          </tr>
        </thead>
        <tbody>
          {invoicesData
            .filter((invoice) => {
              let filter = searchParams.get("search");
              if (!filter) return true;
              let name = invoice.name.toLowerCase();
              return name.includes(filter.toLowerCase());
            })
            .map((invoice) => (
              <tr className="table-success" key={invoice.id}>
                <td>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "red" : "green",
                      };
                    }}
                    to={`/invoices/${invoice.number}`}
                  >
                    {invoice.name}
                  </NavLink>
                </td>
                <td>{invoice.number}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.due}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <Outlet />
    </>
  );
};

export default Invoices;
