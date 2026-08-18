import React from 'react';

function Filter({filter, setFilter}) {
    return (
        <div>
            <p>Find contacts name</p>
            <input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
        </div>
    );
}

export default Filter;