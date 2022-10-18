import logo from "./logo.svg";
import "./App.css";
import Countries from "./component/Countries";
import { countriesData } from "./countries";
import { useState } from "react";
import ReactPaginate from "react-paginate";

function App() {
  const [query, setQuery] = useState("");

  const search = (countriesData) => {
    return countriesData.filter(
      (value) =>
        value.name.toLowerCase().includes(query) ||
        value.capital.toLowerCase().includes(query)
    );
  };

  const handlePageClick = () => {};
  return (
    <div className="none">
      <input
        placeholder="search..."
        className="search"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Countries countriesData={search(countriesData)} />
      <ReactPaginate
        previousLabel={"Previous page"}
        nextLabel={"Next page"}
        breakLabel={"...."}
        pageCount={"10"}
        marginPagesDisplayed={"2"}
        pageRangeDisplayed={"2"}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default App;
