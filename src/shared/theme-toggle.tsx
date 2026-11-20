import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useServices } from "./services-context";

export function ThemeToggle() {
    const { themeService } = useServices();
    const [current, setCurrent] = useState(() => themeService.getTheme());
    const isDark = current === "dark";
    const ThemeIcon = isDark ? SunIcon : MoonIcon;
    const description = isDark ? "Switch to light theme" : "Switch to dark theme";

    const toggle = () => {
        const next = isDark ? "light" : "dark";
        themeService.setTheme(next);
        setCurrent(next);
    };

    return (
        <button
            type="button"
            className="icon-button theme-toggle"
            aria-label={description}
            title={description}
            onClick={toggle}>
            <ThemeIcon size={22} />
        </button>
    );
}
