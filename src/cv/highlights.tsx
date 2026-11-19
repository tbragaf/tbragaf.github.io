export interface IHighlight {
    value: string;
    label: string;
}

export interface IHighlightsProps {
    highlights: IHighlight[];
}

export function Highlights({ highlights }: IHighlightsProps) {
    return (
        <ul className="highlights">
            {highlights.map(({ value, label }) => (
                <li key={label} className="highlight">
                    <span className="highlight-value">{value}</span>
                    <span className="highlight-label">{label}</span>
                </li>
            ))}
        </ul>
    );
}
