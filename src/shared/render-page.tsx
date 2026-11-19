import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { ServicesProvider, type IServices } from "./services-context";
import { ThemeService } from "./theme-service";
import "./styles.css";

export function renderPage(page: ReactNode) {
    const services: IServices = {
        themeService: new ThemeService(getLocalStorage(), document.documentElement)
    };
    services.themeService.restoreTheme();
    const root = createRoot(document.getElementById("root") as HTMLElement);
    root.render(<ServicesProvider services={services}>{page}</ServicesProvider>);
}

function getLocalStorage(): Storage | null {
    try {
        return window.localStorage;
    } catch {
        return null;
    }
}
