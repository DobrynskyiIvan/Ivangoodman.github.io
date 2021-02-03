import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({name, label, handleChange, value, error}) => {
    let wrappedClass = 'form-group'

    if (error && error.length > 0) {
        wrappedClass += ' has-error'
    }

    return (
        <div className={wrappedClass}>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type="text"
                className={'form-control'}
                placeholder={label}
                value={value}
                onChange={handleChange}
            />
            {error && <div className={'error text-danger'}>{error}</div>}
        </div>
    )
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    error: PropTypes.string,
}

export default TextInput;
