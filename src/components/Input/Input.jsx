const Input = (props) => {
    const { className, type, placeholder, value, onChange} = props;
    return (
        <input className={className} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    );
}

export default Input;