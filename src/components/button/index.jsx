import PropTypes from 'prop-types';

const Button = ({ value, type, onClick }) => {
    return (
        <div>
            <button
                className="appearance-none block w-full bg-gradient-to-t from-[#F84401] to-[#FE7A48] border-[#D13900] shadow-md text-white border rounded py-2 px-4 mb-3 leading-tight focus:outline-none"
                type={type}
                onClick={onClick}
                aria-label={value}
            >
                {value}
            </button>
        </div>
    );
};

// Define prop types for the component
Button.propTypes = {
    value: PropTypes.string.isRequired,  // 'value' is required and must be a string
    type: PropTypes.string,               // 'type' is optional but if provided, must be a string
    onClick: PropTypes.func,   // 'onClick' is required to be a function
};

// Define default props
Button.defaultProps = {
    type: 'button',  // Default type is 'button'
};

export default Button;
