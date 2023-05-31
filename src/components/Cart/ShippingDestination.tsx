import React, { ChangeEvent, useState } from "react";

const ShippingDestination: React.FC = (): JSX.Element => {
    
    const [selectedValue, setSelectedValue] = useState("");
    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedValue(selectedValue);
    };

    return (
        <select
            className="form-select py-1 sm:py-2 px-3 sm:px-5 w-[18rem] sm:w-[23rem] text-start text-xl sm:text-2xl cursor-pointer"
            onChange={handleSelect}
            value={selectedValue}
        >
            <option value="Shipping destination">Shipping destination *</option>
            <option value="Santiago de Chile, Chile" className="px-1">
                Santiago de Chile, Chile
            </option>
            <option value="Buenos Aires, Argentina">
                Buenos Aires, Argentina
            </option>
            <option value="Caracas, Venezuela">Caracas, Venezuela</option>
            <option value="Bogota, Colombia">Bogota, Colombia</option>
            <option value="CDMX, Mexico">CDMX, Mexico</option>
        </select>
    );
};

export default ShippingDestination;
