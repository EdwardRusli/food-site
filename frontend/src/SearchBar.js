
import React, { useContext, useState } from "react";
import {AppContext} from "./App";

const SearchBar = () => {

    const {requestFoodList} = useContext(AppContext);

    const [query, setQuery] = useState("");

    const updateInputValue = (evt) => {
        setQuery(evt.target.value);
    }

    return (
        <div className="SearchBar mt-5">
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col">
                        <div className="input-group rounded shadow-sm fs-3">
                            <input className="form-control" placeholder="Type query" value={query} onChange={evt => updateInputValue(evt)}/>
                            <button type="button" className="btn btn-outline-primary" onClick={requestFoodList(query)}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar