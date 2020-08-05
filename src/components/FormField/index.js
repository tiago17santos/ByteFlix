import React from 'react';


function FormField({
  label, type, name, value, onChange,
}) {
  const fieldID = `id_${name}`;
  return (
    <div>
      <label htmlFor={fieldID}>
        {label}
        :
        <input
          id={fieldID}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

/*
--Exemplo de props validation caso use ESlint--

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};*/
export default FormField;
