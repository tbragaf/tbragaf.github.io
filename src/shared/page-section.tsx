import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";

export interface IPageSectionProps {
    id: string;
    title: string;
    icon: Icon;
    subtitle?: string;
    children: ReactNode;
}

export function PageSection({ id, title, icon: SectionIcon, subtitle, children }: IPageSectionProps) {
    return (
        <section id={id} className="section">
            <h2 className="section-title">
                <SectionIcon className="section-icon" size={22} />
                {title}
            </h2>
            {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
            {children}
        </section>
    );
}
