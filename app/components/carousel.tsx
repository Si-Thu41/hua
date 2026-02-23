"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = { images: string[]; interval?: number };

export default function Carousel({ images, interval = 5000 }: Props) {
    const [index, setIndex] = useState(0);
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        if (!images || images.length === 0) return;
        if (timerRef.current) window.clearInterval(timerRef.current);
        timerRef.current = window.setInterval(() => {
            setIndex((i) => (i + 1) % images.length);
        }, interval);
        return () => {
            if (timerRef.current) window.clearInterval(timerRef.current);
        };
    }, [index, images, interval]);

    function goTo(i: number) {
        setIndex(i);
        if (timerRef.current) window.clearInterval(timerRef.current);
        timerRef.current = window.setInterval(() => {
            setIndex((s) => (s + 1) % images.length);
        }, interval);
    }

    return (
        <div className="w-full  mx-auto">
            <div className="relative overflow-hidden  ">
                <div
                    className="flex transition-transform duration-700 ease-in-out  "
                    style={{
                        width: `${images.length * 100}%`,
                        transform: `translateX(-${index * (100 / images.length)}%)`,
                    }}
                >
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="w-full flex-shrink-0  "
                            style={{ width: `${100 / images.length}%` }}
                        >
                            <img
                                src={src}
                                alt={`slide-${i + 1}`}
                                className="w-full rounded-xl "
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-3 space-x-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => goTo(i)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            i === index ? "bg-gray-800" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}