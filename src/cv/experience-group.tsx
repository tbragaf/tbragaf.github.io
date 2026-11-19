import type { ReactNode } from "react";

export interface IExperienceGroupProps {
    heading: string;
    children: ReactNode;
}

export function ExperienceGroup({ heading, children }: IExperienceGroupProps) {
    return (
        <div className="group">
            <h4 className="group-heading">{heading}</h4>
            <ul className="group-list">{children}</ul>
        </div>
    );
}
