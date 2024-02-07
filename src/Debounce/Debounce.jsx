import { useEffect, useState } from "react";

export const debounceSearch = (data,value,setFilteredData)=>{
    setTimeout(() => {
        const filterData = data.filter((ele) =>
        ele.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filterData)
      }, 1000);
}

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => {
        clearTimeout(timer);
      };
    }, [value, delay]);
  
    return debouncedValue;
  };