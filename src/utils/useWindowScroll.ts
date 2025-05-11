import { useCallback, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

type ScrollPosition = {
    x: number;
    y: number;
};

const useWindowScroll = (): [
    ScrollPosition,
    (position: Partial<ScrollPosition>) => void
] => {
    const [scroll, setScroll] = useState({
        x: window.scrollX,
        y: window.scrollY,
    });

    const handleScroll = useCallback(() => {
        setScroll({
            x: window.scrollX,
            y: window.scrollY,
        });
    }, []);

    useWindowEvent('scroll', handleScroll);

    const scrollTo = useCallback(
        (position: Partial<ScrollPosition>) => {
            window.scrollTo({
                left: position.x !== undefined ? position.x : scroll.x,
                top: position.y !== undefined ? position.y : scroll.y,
                behavior: 'smooth',
            });
        },
        [scroll]
    );

    return [scroll, scrollTo];
};
export default useWindowScroll;
