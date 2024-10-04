import './Button.css'


export default function Button({ onClick }) {
    return (
        <div className="button-container">
            <button onClick={onClick}>Очистить</button>
        </div>
    );
}
