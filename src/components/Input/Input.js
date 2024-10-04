import './Input.css'

export default function Input({ value, onChange }) {
    return (
        <div className='input-container' >
            <input
                type="text"
                placeholder="Введите текст"
                value={value}
                onChange={onChange} // this allows the input to update correctly
            />
        </div>
    );
}
