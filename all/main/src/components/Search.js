import React from 'react';

const Search = ({SearchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className = 'pa3 ba b--green bg-lightest-blue'
                type = 'search' 
                placeholder = 'enter the element' 
                onChange = {SearchChange}
            />
        </div>
    );

}

export default Search;