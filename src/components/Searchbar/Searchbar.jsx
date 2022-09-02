import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim() === '') {
            toast.error('Please, write something into the field.');
            return;
        }
        onSubmit(searchQuery);
        setSearchQuery('');
        e.currentTarget.reset();
    };

    const handleChange = (e) => {
        const searchQuery = e.currentTarget.value.trim().toLowerCase();
        setSearchQuery(searchQuery);
    };

    return (
        <header className="Searchbar">
            <form onSubmit={handleSubmit} className="SearchForm">
                <button type="submit" className="SearchForm-button"><AiOutlineSearch className="SearchForm-icon" />
                </button>

                <input onChange={handleChange}
                    name="query"
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;