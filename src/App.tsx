import useLocalStorage from './utils/useLocalStorage';

function App() {
    const [value, { setItem, removeItem }] = useLocalStorage('some-key');
    const handleSet = () => {
        setItem('new storage value');
    };

    const handleRemove = () => {
        removeItem();
    };

    return (
        <div className='card'>
            <p>Значение из LocalStorage: {value}</p>
            <div>
                <button onClick={handleSet}>Задать значение</button>
                <button onClick={handleRemove}>Удалить значение</button>
            </div>
        </div>
    );
}

export default App;
