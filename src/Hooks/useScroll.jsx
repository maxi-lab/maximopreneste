import { useState } from "react";
export default function useScroll() {
    const [scroll, setScroll] = useState(0);
    const handleScroll = () => {
        setScroll(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return scroll;

}
