import { useState, useEffect } from 'react';
import { useWindowEvent } from './useWindowEvent';

type ViewportSize = {
    width: number;
    height: number;
};
export function useViewportSize(): ViewportSize {
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Set initial size
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
    }, []);

    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useWindowEvent('resize', handleResize);

    return size;
}
