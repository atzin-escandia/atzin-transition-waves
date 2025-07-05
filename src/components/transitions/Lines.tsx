'use client';

import { motion, MotionProps, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { EXPAND_ANIMATION, OPACITY_ANIMATION } from '@/lib/animations';

type AnimationConfig = (variants: Variants, custom?: number | null) => MotionProps & { custom?: number | null };

const anim: AnimationConfig = (variants, custom = null) => ({
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
    ...(custom !== null ? { custom } : {}),
});

export default function Lines({ children }: { children: ReactNode }) {
    const nbOfColumns = 5;

    return (
        <div className="relative z-10 w-full overflow-hidden p-10 h-[calc(100vh-80px)]">
            <motion.div
                {...anim(OPACITY_ANIMATION)}
                className="fixed top-0 left-0 z-[1] h-screen w-full pointer-events-none bg-black"
            />
            <div className="fixed top-0 left-0 z-[2] flex h-screen w-screen pointer-events-none">
                {[...Array(nbOfColumns)].map((_, i) => (
                    <motion.div
                        key={i}
                        {...anim(EXPAND_ANIMATION, nbOfColumns - i)}
                        className="relative h-full w-full bg-black"
                    />
                ))}
            </div>
            <div className="relative z-[3] h-full flex items-center justify-center">{children}</div>
        </div>
    );
}
