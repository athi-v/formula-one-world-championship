import React from 'react'
import Select from 'react-select'


// const options = [
//   { value: '2005', label: '2005' },
//   { value: '2006', label: '2006' },
// ]


const SelectOption = ({options, onChange, placeholder,  value}) => {
  
    return (
      <Select className="w-full lg:w-[35%]" options={options} placeholder={placeholder} onChange={onChange} value={value} />
    );
    }

export default SelectOption;

