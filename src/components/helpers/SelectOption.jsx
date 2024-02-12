import Select from 'react-select'

const SelectOption = ({options, onChange, placeholder,  value}) => {
  
    return (
      <Select className="w-full lg:w-[35%]" options={options} placeholder={placeholder} onChange={onChange} value={value} />
    );
    }

export default SelectOption;

