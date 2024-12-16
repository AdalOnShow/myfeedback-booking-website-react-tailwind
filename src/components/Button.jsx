/* eslint-disable react/prop-types */
const Button = ({ children, variant, className }) => {
    return (
        <button
            className={`
            py-[14px] rounded-full
            ${variant === 'primary' ? 'bg-primary text-white px-10' : 'bg-darkGray text-white px-7'}
            ${className}
            `}
        >
            {children}
        </button>
    )
}
export default Button
