/* eslint-disable react/prop-types */
const Button = ({ children, variant, className }) => {
    return (
        <button
            className={`
            px-7 py-[14px] rounded-full
            ${variant === 'primary' ? 'bg-primary text-white' : 'bg-darkGray text-white'}
            ${className}
            `}
        >
            {children}
        </button>
    )
}
export default Button
