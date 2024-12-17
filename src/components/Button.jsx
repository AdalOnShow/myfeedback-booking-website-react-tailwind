/* eslint-disable react/prop-types */
const Button = ({ children, variant, className }) => {
    return (
        <button
            className={`
            py-2 md:py-[14px] rounded-full text-xs md:text-base
            ${variant === 'primary' ? 'bg-primary text-white px-6 md:px-10' : 'bg-darkGray text-white px-4 md:px-7'}
            ${className}
            `}
        >
            {children}
        </button>
    )
}
export default Button
