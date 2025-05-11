import useWindowScroll from './utils/useWindowScroll';

function App() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <div style={{ height: '200vh', padding: 500 }}>
            <h2>Scroll position</h2>
            <p>
                x: {scroll.x}, y: {scroll.y}
            </p>
            <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
            <button onClick={() => scrollTo({ y: 1000 })}>
                Scroll to 1000px
            </button>
        </div>
    );
    // const { width, height } = useViewportSize();

    // const logResize = useCallback(() => {
    //     console.log(
    //         '💡 Окно изменилось:',
    //         window.innerWidth,
    //         window.innerHeight
    //     );
    // }, []);

    // useWindowEvent('resize', logResize);

    // return (
    //     <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
    //         <h2>Размер окна:</h2>
    //         <p>Ширина: {width}px</p>
    //         <p>Высота: {height}px</p>
    //     </div>
    // );
}

export default App;
