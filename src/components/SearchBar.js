import React from "react";

const SearchBar = ({
    value,
    isLoading,
    handleSubmit,
    onChange
}) => {
    return (
           <form onSubmit={handleSubmit}>
           <input
            value={value}
            disabled={isLoading}
            onChange={onChange}
            placeholder="Search Recipes"
            className="form-control"
           />

           <input type="submit"
           disabled={isLoading || !value} 
           value="search"
           className="btn"/>

           </form>
    )
};
export default SearchBar