'use client';
import { useRef } from "react";

const HorizontallyScrollable =({children, className=''}) => {
    const scrollRef = useRef(null);

    const handleMouseDown = (evt) => {
        const oldX = evt.pageX;
        const scrollLeft= scrollRef.current.scrollLeft;

        const handleMouseMove = () => {
            const newX = evt.pageX;
            const offset = newX - oldX;

            scrollRef.current.scrollLeft = scrollLeft-offset;
        }

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

    return (
        <div ref={scrollRef} onMouseDown={handleMouseDown} className={`flex flex-row scroll-smooth overflow-x-auto no-scrollbar ${className}`}>
            {children}
        </div>
    )
}

export default HorizontallyScrollable;