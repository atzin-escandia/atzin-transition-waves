'use client';

import React, { useEffect, useState } from 'react';
import { motion, MotionProps, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { WAVE_ANIMATION, TEXT_ANIMATION, TRANSLATE_ANIMATION } from '@/lib/animations';
import { ROUTES } from '@/lib';

const anim = (variants: Variants): MotionProps => ({
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
});

type SVGProps = {
    width: number;
    height: number;
};

export default function Wave({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [dimensions, setDimensions] = useState<{ width: number | null; height: number | null }>({
        width: null,
        height: null,
    });

    useEffect(() => {
        function resize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    const currentRouteLabel = ROUTES.find((route) => route.href === pathname)?.label ?? '';

    return (
        <div className="relative z-10 w-full overflow-hidden p-10 h-[calc(100vh-80px)] ">
            <div
                className="fixed left-0 top-0 h-[calc(100vh+600px)] w-screen  pointer-events-none transition-opacity duration-0 delay-100"
                style={{ opacity: dimensions.width == null ? 1 : 0 }}
            />
            <motion.p
                {...anim(TEXT_ANIMATION)}
                className="absolute left-1/2 top-[40%] z-30 -translate-x-1/2 text-center text-[46px] text-white"
            >
                {currentRouteLabel}
            </motion.p>
            {dimensions.width !== null && <SVG width={dimensions.width} height={dimensions.height!} />}
            <div className="relative z-20 h-full  items-center flex justify-center">{children}</div>
        </div>
    );
}

const SVG = ({ width, height }: SVGProps) => {
    const initialPath = `
		M0 300 
		Q${width / 2} 0 ${width} 300
		L${width} ${height + 300}
		Q${width / 2} ${height + 600} 0 ${height + 300}
		L0 0
	`;

    const targetPath = `
		M0 300
		Q${width / 2} 0 ${width} 300
		L${width} ${height}
		Q${width / 2} ${height} 0 ${height}
		L0 0
	`;

    return (
        <motion.svg
            {...anim(TRANSLATE_ANIMATION)}
            className="fixed left-0 top-0 h-[calc(100vh+600px)] w-screen pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path {...anim(WAVE_ANIMATION(initialPath, targetPath))} fill="black" />
        </motion.svg>
    );
};
