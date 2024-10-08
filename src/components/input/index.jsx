import PropTypes from 'prop-types';

const Input = ({ label, type, placeholder, errors, name, value, onChange, onBlur, variant }) => {
    return (
        <>
            {variant === "pin" ? (
                <div className='flex flex-col'>
                    <input
                        type="text"
                        name={name}
                        id={name}
                        value={value}       // Controlled input with Formik's value
                        onChange={(e) => {
                            // Ensure the value is a single digit
                            if (/^\d?$/.test(e.target.value)) {
                                onChange(e);
                            }
                        }}
                        onBlur={onBlur}     // Formik's onBlur handler
                        maxLength="1"       // Limit the input to a single character
                        pattern="\d*"       // Accept only digits
                        className="appearance-none block w-[3.25rem] text-center h-[3.25rem] backdrop-blur-sm bg-white/10 shadow-md text-white border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent placeholder:text-white border-gray-400"
                    />
                    {errors[name] && (
                        <span className="inline-block text-[12px] text-red-500 -translate-y-3">
                            {errors[name]}
                        </span>
                    )}
                </div>
            ) : (
                <div>
                    <div className={`w-full`}>
                        <label
                            className="block tracking-wide text-xs font-bold mb-2 text-[10.481px] lg:text-[14.8993px]"
                            htmlFor={name}
                        >
                            {label}
                        </label>
                        <input
                            className="appearance-none block w-full backdrop-blur-sm bg-white/10 shadow-md text-white border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-transparent placeholder:text-white border-gray-400"
                            type={type}
                            name={name}
                            id={name}
                            placeholder={placeholder}
                            value={value}       // Controlled input with Formik's value
                            onChange={onChange} // Formik's onChange handler
                            onBlur={onBlur}     // Formik's onBlur handler
                        />
                    </div>
                    {errors[name] && (
                        <span className="inline-block text-[12px] text-red-500 -translate-y-3">
                            {errors[name]}
                        </span>
                    )}
                </div>
            )}
        </>
    );
};

// Define prop types for the component
Input.propTypes = {
    label: PropTypes.string.isRequired,  // 'label' is required and must be a string
    type: PropTypes.string.isRequired,   // 'type' is required and must be a string
    placeholder: PropTypes.string,       // 'placeholder' is optional and must be a string
    errors: PropTypes.object,            // 'errors' should be an object
    name: PropTypes.string.isRequired,   // 'name' is required and must be a string
    value: PropTypes.string.isRequired,  // 'value' is required and must be a string (controlled input)
    onChange: PropTypes.func.isRequired, // 'onChange' is required and must be a function
    onBlur: PropTypes.func.isRequired,   // 'onBlur' is required and must be a function
    variant: PropTypes.string.isRequired // 'variant' is required and must be a string (e.g., "pin")
};

// Define default props
Input.defaultProps = {
    placeholder: '', // Default to an empty placeholder if not provided
    errors: {},      // Default to an empty object if not provided
};

export default Input;
