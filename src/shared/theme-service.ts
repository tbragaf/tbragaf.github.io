export type Theme = "system" | "light" | "dark";

export interface IThemeService {
    getTheme(): Theme;
    setTheme(theme: Theme): void;
    restoreTheme(): void;
}

const STORAGE_KEY = "tbragaf.theme";

export class ThemeService implements IThemeService {
    public constructor(
        private readonly storage: Storage | null,
        private readonly root: HTMLElement
    ) {}

    public getTheme(): Theme {
        const saved = this.read();
        return saved === "light" || saved === "dark" ? saved : "system";
    }

    public setTheme(theme: Theme): void {
        this.apply(theme);
        this.write(theme);
    }

    public restoreTheme(): void {
        this.apply(this.getTheme());
    }

    private apply(theme: Theme): void {
        if (theme === "system") {
            delete this.root.dataset.theme;
        } else {
            this.root.dataset.theme = theme;
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
            if (theme === "system") {
                this.storage?.removeItem(STORAGE_KEY);
            } else {
                this.storage?.setItem(STORAGE_KEY, theme);
            }
        } catch {
            return;
        }
    }
}
