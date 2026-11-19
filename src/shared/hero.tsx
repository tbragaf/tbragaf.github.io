import { MapPinIcon, type Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";

export interface IHeroLink {
    href: string;
    text: string;
    icon: Icon;
}

export interface IHeroProps {
    title: string;
    location?: string;
    links?: IHeroLink[];
    children?: ReactNode;
}

export function Hero({ title, location, links, children }: IHeroProps) {
    return (
        <section className="hero">
            <div className="hero-inner">
                <img className="hero-photo" src="/assets/tiago-braga-fernandes.jpg" alt="" />
                <div className="hero-main">
                    <h1 className="hero-name">Tiago Braga Fernandes</h1>
                    <p className="hero-title">{title}</p>
                    {location ? (
                        <p className="hero-location">
                            <MapPinIcon size={18} />
                            {location}
                        </p>
                    ) : null}
                    {children ? <div className="hero-actions">{children}</div> : null}
                </div>
                {links ? (
                    <ul className="hero-links">
                        {links.map(({ href, text, icon: LinkIcon }) => (
                            <li key={href}>
                                <a className="hero-round" href={href} title={text}>
                                    <LinkIcon size={20} />
                                    <span className="hero-label">{text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </section>
    );
}
