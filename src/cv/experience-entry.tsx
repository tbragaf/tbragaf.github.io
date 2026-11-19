import type { ReactNode } from "react";

export interface IExperienceEntryProps {
    role: string;
    organization: string;
    period: string;
    history?: string[];
    tools?: string[];
    children: ReactNode;
}

export function ExperienceEntry({ role, organization, period, history, tools, children }: IExperienceEntryProps) {
    return (
        <article className="timeline-item">
            <span className="timeline-point" />
            <header className="entry-head">
                <div>
                    <h3 className="entry-title">{role}</h3>
                    <p className="entry-organization">{organization}</p>
                </div>
                <p className="entry-period">{period}</p>
            </header>
            {history ? (
                <ul className="entry-history">
                    {history.map((step) => (
                        <li key={step}>{step}</li>
                    ))}
                </ul>
            ) : null}
            <div className="entry-description">{children}</div>
            {tools ? (
                <ul className="pills">
                    {tools.map((tool) => (
                        <li key={tool} className="pill">
                            {tool}
                        </li>
                    ))}
                </ul>
            ) : null}
        </article>
    );
}
