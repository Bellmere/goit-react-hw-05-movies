import { useState } from "react";
import PropTypes from 'prop-types';
import './SearchForm.css';

const SearchForm = (props) => {
    const [inputSearch, setInputSearch] = useState('');

    const handleChange = e => {
        setInputSearch(e.target.value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (inputSearch.trim() === '') {
            alert('Write correct word');
            return;
        } else {
            props.onSubmit(inputSearch);
            setInputSearch('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="searchbar__form">
            <input
            className="searchbar__input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Movies"
            onChange={handleChange}
            />
            <button type="submit" className="searchbar__btn">
                Search
            </button>
        </form>
    );
}

export default SearchForm;