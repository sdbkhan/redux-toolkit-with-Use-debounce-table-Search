import { useEffect, useState } from "react";
import React from "react";
import { debounceSearch, useDebounce } from "../../Debounce/Debounce";
// import { useDebounce } from "@uidotdev/usehooks";

const TableUser = () => {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    setState(e.target.value);
  };
  const data = [
    { name: "shadab", country: "India" },
    { name: "Lala", country: "Aus" },
    { name: "Nitis", country: "London" },
    { name: "Jaya", country: "America" },
    { name: "KOmal", country: "Indo" },
    { name: "Naved", country: "Nepal" },
    { name: "Kuldeep", country: "DUbai" },
    { name: "DHarmendra", country: "Oman" },
    { name: "Nitis", country: "London" },
    { name: "Jaya", country: "America" },
    { name: "KOmal", country: "Indo" },
    { name: "Naved", country: "Nepal" },
    { name: "Kuldeep", country: "DUbai" },
    { name: "DHarmendra", country: "Oman" },
    { name: "Nitis", country: "London" },
    { name: "Jaya", country: "America" },
    { name: "KOmal", country: "Indo" },
    { name: "Naved", country: "Nepal" },
    { name: "Kuldeep", country: "DUbai" },
    { name: "DHarmendra", country: "Oman" },
    { name: "Nitis", country: "London" },
    { name: "Jaya", country: "America" },
    { name: "KOmal", country: "Indo" },
    { name: "Naved", country: "Nepal" },
    { name: "Kuldeep", country: "DUbai" },
    { name: "DHarmendra", country: "Oman" },
  ];
  const [filteredData, setFilteredData] = useState([]);
  //   const debounceSearch = (data,value)=>{

  //   }
  const debouceText = useDebounce(state,1000)
  useEffect(() => {
    if(debouceText){
        debounceSearch(data, state, setFilteredData);

    }else {
        setFilteredData(data)
    }
  }, [debouceText]);
  console.log(debouceText,filteredData,"dsfdsjfk")
  return (
    <>
      <h2>My Customers</h2>

      <input
        type="text"
        id="myInput"
        value={state}
        placeholder="Search for names.."
        onChange={handleChange}
      />

      <table id="myTable">
        <tr class="header">
          <th style={{ width: "60%" }}>Name</th>
          <th style={{ width: "40%" }}>Country</th>
        </tr>
        {filteredData.map((ele) => {
          return (
            <tr>
              <td>{ele.name}</td>
              <td>{ele.country}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
export default TableUser;
