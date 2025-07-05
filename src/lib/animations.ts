import { TargetAndTransition, Variants } from "framer-motion";

type CustomVariantFunction = (custom: number) => TargetAndTransition;

export type ExpandAnimation = {
	initial: TargetAndTransition;
	enter: CustomVariantFunction;
	exit: CustomVariantFunction;
};

export const EXPAND_ANIMATION: ExpandAnimation = {
	initial: {
		top: 0,
	},
	enter: (i: number) => ({
		top: "100vh",
		transition: {
			duration: 0.4,
			delay: 0.05 * i,
			ease: [0.215, 0.61, 0.355, 1],
		},
		transitionEnd: { height: "0", top: "0" },
	}),
	exit: (i: number) => ({
		height: "100vh",
		transition: {
			duration: 0.4,
			delay: 0.05 * i,
			ease: [0.215, 0.61, 0.355, 1],
		},
	}),
};

export const OPACITY_ANIMATION: Variants = {
	initial: {
		opacity: 0.5,
	},
	enter: {
		opacity: 0,
	},
	exit: {
		opacity: 0.5,
	},
};

export const OPACITY_TWO_ANIMATION: Variants = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		opacity: 1,
	},
};

export const PERSPECTIVE_ANIMATION: Variants = {
	initial: {
		scale: 1,
		y: 0,
	},
	enter: {
		scale: 1,
		y: 0,
	},
	exit: {
		scale: 0.9,
		y: -150,
		opacity: 0.5,
		transition: {
			duration: 1.2,
			ease: [0.76, 0, 0.24, 1],
		},
	},
};

export const SLIDE_ANIMATION: Variants = {
	initial: {
		y: "100vh",
	},
	enter: {
		y: "100vh",
	},
	exit: {
		y: 0,
		transition: {
			duration: 1,
			ease: [0.76, 0, 0.24, 1],
		},
	},
};

export const TEXT_ANIMATION: Variants = {
	initial: {
		opacity: 1,
	},
	enter: {
		opacity: 0,
		top: -100,
		transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
		transitionEnd: { top: "47.5%" },
	},
	exit: {
		opacity: 1,
		top: "40%",
		transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
	},
};

export const WAVE_ANIMATION = (
	initialPath: string,
	targetPath: string
): Variants => ({
	initial: {
		d: initialPath,
	},
	enter: {
		d: targetPath,
		transition: {
			duration: 0.75,
			delay: 0.35,
			ease: [0.76, 0, 0.24, 1],
		},
	},
	exit: {
		d: initialPath,
		transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
	},
});

export const TRANSLATE_ANIMATION: Variants = {
	initial: {
		top: "-300px",
	},
	enter: {
		top: "-100vh",
		transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
		transitionEnd: {
			top: "100vh",
		},
	},
	exit: {
		top: "-300px",
		transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
	},
};
