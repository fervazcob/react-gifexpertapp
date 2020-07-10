import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    
    const [category, setCategory] = useState('');

    const handleInputValue = (e) => {

        setCategory(e.target.value);

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if(category !== '') {
            
            setCategories(cat => [
                category,
                ...cat,
            ]);

        }

        setCategory('');

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ category }
                onChange={ handleInputValue }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
 
export default AddCategory;