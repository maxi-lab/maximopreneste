import { useState } from "react";
export default function useMenu() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }

    return {open,handleOpen};
}