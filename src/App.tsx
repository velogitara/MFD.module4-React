import useHover from './utils/useHover';

function App() {
    const { hovered, ref } = useHover<HTMLDivElement>({
        delayEnter: 500,
        delayLeave: 200,
    });

    return (
        <div className='card'>
            <div
                className='box'
                ref={ref}
                style={{
                    padding: '20px',
                    backgroundColor: hovered ? '#e0f7fa' : '#eeeeee',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    textAlign: 'center',
                    transition: '0.3s',
                }}
            >
                {hovered
                    ? '🕒 Подождал и навёлся'
                    : 'Наведи мышкой — с задержкой'}
            </div>
        </div>
    );
}

export default App;
