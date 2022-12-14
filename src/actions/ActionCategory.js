import React, { useState } from 'react';

const ActionCategory = ({ setCategory }) => {

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const searchGif = e => {
        e.preventDefault();
        if (value === "") {
            setError(true);
            return;
        }
        setError(false);
        setCategory(value);
        setValue("");
    }

    return ( 
        <>
            <form onSubmit={ searchGif }>
                <input type="text" placeholder='Search...' 
                    onChange={e => setValue(e.target.value)}
                    value={value}
                />
            </form>
            { error ? <p className='error'>The field cannot be empty...</p> : ""}
        </>
     );
}
 
export default ActionCategory;