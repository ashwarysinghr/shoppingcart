import React, {Component} from 'react';

const Brands = (props) => {
    const {data, handleSelectBox} = props;
    return (
        <li className="list-group-item flex-50">
            <label className="custom-checkbox text-capitalize"> {data}
                <input type="checkbox"
                        name={data}
                        className="custom-checkbox__input" onInput={handleSelectBox}/>
                <span className="custom-checkbox__span"></span>
            </label>
        </li>
    )
}
export default Brands