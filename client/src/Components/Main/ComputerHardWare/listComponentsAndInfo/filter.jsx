import React from 'react';

const Filter = ({ handlefilteredProducts }) => {
    return (
        <div className="ordeyBy" >
            <label>
                <select className="drop_down_ordeyBy" onChange={handlefilteredProducts}>
                    <option value="">Featured</option>
                    <option value="lowest">Price (Low - High)</option>
                    <option value="highest">Price (High - Low)</option>
                    <option value="AlphabeticalAZ">Alphabetical (A - Z)</option>
                    <option value="AlphabeticalZA">Alphabetical (Z - A)</option>
                </select>
            </label>
        </div>
    )
}
export default Filter;