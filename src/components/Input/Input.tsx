interface InputProps {
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ placeholder }) => {
    return (
        <input type="text" placeholder={`Type your ${placeholder}`} />
    )
}

export default Input;