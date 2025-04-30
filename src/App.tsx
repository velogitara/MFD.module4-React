import { useViewportSize } from './utils/useViewPortSize';
import { useWindowEvent } from './utils/useWindowEvent';
import { useCallback } from 'react';

function App() {
    const { width, height } = useViewportSize();

    const logResize = useCallback(() => {
        console.log(
            '💡 Окно изменилось:',
            window.innerWidth,
            window.innerHeight
        );
    }, []);

    useWindowEvent('resize', logResize);

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Размер окна:</h2>
            <p>Ширина: {width}px</p>
            <p>Высота: {height}px</p>
        </div>
    );
}

export default App;
