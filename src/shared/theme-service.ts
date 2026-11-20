export type Theme = "light" | "dark";

export interface IThemeService {
    getTheme(): Theme;
    setTheme(theme: Theme): void;
    restoreTheme(): void;
}

const STORAGE_KEY = "tbragaf.theme";

export class ThemeService implements IThemeService {
    public constructor(
        private readonly storage: Storage | null,
        private readonly root: HTMLElement,
        private readonly systemDarkQuery: MediaQueryList
    ) {}

    public getTheme(): Theme {
        const saved = this.read();
        if (saved === "light" || saved === "dark") {
            return saved;
        }
        return this.systemDarkQuery.matches ? "dark" : "light";
    }

    public setTheme(theme: Theme): void {
        this.root.dataset.theme = theme;
        this.write(theme);
    }

    public restoreTheme(): void {
        const saved = this.read();
        if (saved === "light" || saved === "dark") {
            this.root.dataset.theme = saved;
        }
    }

    // Storage can be off (a private window, blocked site data): the choice then lasts until the page is reloaded.
    private read(): string | null {
        try {
            return this.storage?.getItem(STORAGE_KEY) ?? null;
        } catch {
            return null;
        }
    }

    private write(theme: Theme): void {
        try {
            this.storage?.setItem(STORAGE_KEY, theme);
        } catch {
            return;
        }
    }
}
