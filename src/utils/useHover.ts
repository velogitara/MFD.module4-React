import { RefObject, useState, useEffect, useRef } from 'react';

type UseHoverDelayReturn<T extends HTMLElement> = {
    hovered: boolean;
    ref: RefObject<T | null>;
};

type UseHoverDelayOptions = {
    delayEnter?: number; 
    delayLeave?: number; 
};
const useHover = <T extends HTMLElement>(
    options: UseHoverDelayOptions = {}
): UseHoverDelayReturn<T> => {
    const { delayEnter = 300, delayLeave = 0 } = options;

    const [hovered, setHovered] = useState(false);
    const ref = useRef<T | null>(null);

    const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const handleMouseEnter = () => {
            if (leaveTimer.current) clearTimeout(leaveTimer.current);
            enterTimer.current = setTimeout(() => setHovered(true), delayEnter);
        };

        const handleMouseLeave = () => {
            if (enterTimer.current) clearTimeout(enterTimer.current);
            leaveTimer.current = setTimeout(
                () => setHovered(false),
                delayLeave
            );
        };

        node.addEventListener('mouseenter', handleMouseEnter);
        node.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            node.removeEventListener('mouseenter', handleMouseEnter);
            node.removeEventListener('mouseleave', handleMouseLeave);
            if (enterTimer.current) clearTimeout(enterTimer.current);
            if (leaveTimer.current) clearTimeout(leaveTimer.current);
        };
    }, [delayEnter, delayLeave]);
    return { hovered, ref };
};

export default useHover;
