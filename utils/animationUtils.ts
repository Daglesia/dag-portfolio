import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

const LEAVE_ANIMATION_DURATION_SECONDS = 0.82;

type Callback = (...args: any[]) => void | null;

const marioCurve = CustomEase.create("mario", "0.36, 0.07, 0.19, 0.97");

export const spanOutAnimationEnter = (element: Element, callback: Callback) => {
    gsap.from(element, {
        filter: "blur(4px)",
        ease: marioCurve,
        duration: LEAVE_ANIMATION_DURATION_SECONDS / 2,
    });
    gsap.fromTo(element, {
        width: "0",
    },
    {
        width: "100%",
        ease: marioCurve,
        duration: LEAVE_ANIMATION_DURATION_SECONDS,
        onComplete: callback,
    });
};

export const popFromAboveAnimationEnter = (element: Element, callback: Callback) => {
    gsap.from(element, {
        filter: "blur(2px)",
        ease: marioCurve,
        duration: LEAVE_ANIMATION_DURATION_SECONDS / 2,
    });
    gsap.fromTo(element, {
        transform: "translateY(5rem)",
    },
    {
        transform: "translateY(0rem)",
        ease: marioCurve,
        delay: 0.3,
        duration: LEAVE_ANIMATION_DURATION_SECONDS,
        onComplete: callback,
    });
};

export const fadeFromAboveAnimationEnter = (element: Element, callback: Callback) => {
    gsap.from(element, {
        filter: "blur(2px)",
        ease: marioCurve,
        duration: LEAVE_ANIMATION_DURATION_SECONDS / 2,
    });
    gsap.fromTo(element, {
        transform: "translateY(1rem)",
        opacity: 0.1,
    },
    {
        opacity: 1,
        transform: "translateY(0rem)",
        ease: marioCurve,
        duration: LEAVE_ANIMATION_DURATION_SECONDS,
        onComplete: callback,
    });
};

export const fadeFromAboveAnimationEnter2 = (element: Element, callback: Callback) => {
    console.log(element.dataset.index, "pwpwpwpw");
};

export const hrVerticalAnimation = (element: Element, callback: Callback) => {
    gsap.from(element, {
        filter: "blur(2px)",
        ease: marioCurve,
        duration: LEAVE_ANIMATION_DURATION_SECONDS / 2,
    });
    gsap.fromTo(element, {
        height: 0,
    },
    {
        height: "100%",
        ease: marioCurve,
        duration: LEAVE_ANIMATION_DURATION_SECONDS,
        onComplete: callback,
    });
};