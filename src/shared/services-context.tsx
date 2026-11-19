import { createContext, useContext, type ReactNode } from "react";
import type { IThemeService } from "./theme-service";

export interface IServices {
    themeService: IThemeService;
}

const ServicesContext = createContext<IServices | null>(null);

export interface IServicesProviderProps {
    services: IServices;
    children: ReactNode;
}

export function ServicesProvider({ services, children }: IServicesProviderProps) {
    return <ServicesContext.Provider value={services}>{children}</ServicesContext.Provider>;
}

export function useServices(): IServices {
    const services = useContext(ServicesContext);
    if (!services) {
        throw new Error("useServices needs a ServicesProvider");
    }
    return services;
}
