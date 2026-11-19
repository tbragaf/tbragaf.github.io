import { CircleHalfIcon, MoonIcon, SunIcon, type Icon } from "@phosphor-icons/react";
import { useState } from "react";
import { useServices } from "./services-context";
import type { Theme } from "./theme-service";

const THEMES: { theme: Theme; label: string; icon: Icon }[] = [
    { theme: "system", label: "Automatic", icon: CircleHalfIcon },
    { theme: "light", label: "Light", icon: SunIcon },
    { theme: "dark", label: "Dark", icon: MoonIcon }
];

export function ThemeToggle() {
    const { themeService } = useServices();
    const [current, setCurrent] = useState<Theme>(() => themeService.getTheme());
    const position = THEMES.findIndex(({ theme }) => theme === current);
    const { label, icon: ThemeIcon } = THEMES[position];
    const next = THEMES[(position + 1) % THEMES.length].theme;
    const description = `Theme: ${label}`;

    const choose = (theme: Theme) => {
        themeService.setTheme(theme);
        setCurrent(theme);
    };

    return (
        <button
            type="button"
            className="icon-button theme-toggle"
            aria-label={description}
            title={description}
            onClick={() => choose(next)}>
            <ThemeIcon size={22} />
        </button>
    );
}
