import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import PropTypes from 'prop-types';
import './SearchForm.css';

const SearchForm = ({onSubmit}) => {
    const [inputSearch, setInputSearch] = useState(() => {
        const prevSearch = sessionStorage.getItem('prevSearch');
        return JSON.parse(prevSearch) ?? '';
      });

    const location = useLocation();

    useEffect(() => {
        sessionStorage.setItem('prevSearch', JSON.stringify(inputSearch));
      }, [inputSearch]);
      

      useEffect(() => {
        if (location.groupsname) {
          setInputSearch(location.groupsname);
        }
      }, [location.groupsname]);

    const handleChange = e => {
        setInputSearch(e.target.value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (inputSearch.trim() === '') {
            alert('Write correct word');
            return;
        } else {
            onSubmit(inputSearch);
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
            defaultValue={inputSearch}
            />
            <button type="submit" className="searchbar__btn">
                Search
            </button>
        </form>
    );
}

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default SearchForm;