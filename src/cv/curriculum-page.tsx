import {
    BriefcaseIcon,
    CodeIcon,
    DownloadSimpleIcon,
    EnvelopeSimpleIcon,
    GithubLogoIcon,
    GraduationCapIcon,
    LinkedinLogoIcon,
    TranslateIcon,
    UserIcon
} from "@phosphor-icons/react";
import { ExternalLink } from "../shared/external-links";
import { Hero, type IHeroLink } from "../shared/hero";
import { PageLayout } from "../shared/page-layout";
import { PageSection } from "../shared/page-section";
import { Route } from "../shared/route";
import { ExperienceEntry } from "./experience-entry";
import { ExperienceGroup } from "./experience-group";
import { Highlights, type IHighlight } from "./highlights";

const mentorDocumentationUrl =
    "https://success.outsystems.com/documentation/outsystems_developer_cloud/agentic_development/ai_development_in_mentor_studio/";

const contactLinks: IHeroLink[] = [
    { href: ExternalLink.Email, text: "braga.tiago.93@gmail.com", icon: EnvelopeSimpleIcon },
    { href: ExternalLink.LinkedIn, text: "linkedin.com/in/tbragaf", icon: LinkedinLogoIcon },
    { href: ExternalLink.GitHub, text: "github.com/tbragaf", icon: GithubLogoIcon }
];

const highlights: IHighlight[] = [
    { value: "12 years", label: "building software, 9 on IDEs" },
    { value: "Mentor", label: "architected and built from scratch with the AI team" },
    { value: "2 IDEs", label: "ODC Studio and Service Studio, on Windows and macOS" },
    { value: "4,000+", label: "hits in six months from merge issues I fixed" }
];

const outSystemsTools = ["TypeScript", "React", "C#", ".NET", "Node.js", "Jest", "pnpm", "Claude Code"];

const financeAppTools = ["TypeScript", "React", "React Native", "Express", "Postgres", "Claude API", "Claude Code"];

export function CurriculumPage() {
    return (
        <PageLayout currentRoute={Route.Curriculum}>
            <Hero title="Lead Software Engineer" location="Braga, Portugal" links={contactLinks}>
                <button type="button" className="hero-round" title="Download CV" onClick={() => window.print()}>
                    <DownloadSimpleIcon size={20} />
                    <span className="hero-label">Download CV</span>
                </button>
            </Hero>

            <PageSection id="profile" title="Profile" icon={UserIcon}>
                <div className="text">
                    <p>
                        Lead Software Engineer at OutSystems with 12 years building software, most of them on developer
                        tools: OutSystems Developer Cloud (ODC) Studio and Service Studio, the IDEs people use to build
                        apps on OutSystems.
                    </p>
                    <p>
                        I know the IDE's codebase and architecture in depth, turn other people's ideas and prototypes
                        into products across teams, and dig into the hard problems: analysing hangs, memory consumption
                        and performance bottlenecks. Lately, I've been bringing AI into the IDE, and into how my team
                        builds it.
                    </p>
                </div>
                <Highlights highlights={highlights} />
            </PageSection>

            <PageSection id="experience" title="Work experience" icon={BriefcaseIcon}>
                <div className="timeline">
                    <ExperienceEntry
                        role="Lead Software Engineer"
                        organization="OutSystems"
                        period="2017 – Present"
                        history={["Lead (2022 – Present)", "Senior (2020 – 2022)", "Software Engineer (2017 – 2020)"]}
                        tools={outSystemsTools}>
                        <ExperienceGroup heading="AI">
                            <li>
                                <strong>Mentor:</strong> architected and built{" "}
                                <a href={mentorDocumentationUrl}>Mentor</a>, the AI assistant in ODC Studio, from
                                scratch with the AI team, turning their ideas and prototypes into a product. Product and
                                UX planned the release around that architecture, and I guided the team developing it.
                                Live since March 2026.
                            </li>
                            <li>
                                <strong>Agentic engineering:</strong> championed AI-assisted tools and agentic workflows
                                in the team, with subagents and skills shared by everyone.
                            </li>
                        </ExperienceGroup>
                        <ExperienceGroup heading="Architecture across teams">
                            <li>
                                <strong>The whole IDE:</strong> a code owner across the IDE, evolving its features,
                                improving its performance and mentoring the engineers who work on it.
                            </li>
                            <li>
                                <strong>Mobile UI:</strong> led the IDE side, from the architecture that started its
                                planning to its model plugins: .NET DLLs the IDE loads at runtime. Became their main
                                point of contact and built how the IDE detects incompatibilities between their versions.
                            </li>
                            <li>
                                <strong>Performance:</strong> moved heavy publishing work to the background with a
                                thread-safe way to update references, closing ODC's gap with OutSystems 11 (O11), and
                                sped up the slowest editing operations.
                            </li>
                            <li>
                                <strong>Cost savings:</strong> led the IDE's part in moving secrets out of the model
                                into a dedicated secrets manager, saving a substantial amount every day.
                            </li>
                        </ExperienceGroup>
                        <ExperienceGroup heading="Quality">
                            <li>
                                <strong>Stability:</strong> helped cut the IDE's crash rate: fixed high-impact crashes,
                                hangs and memory leaks, greatly reduced memory use, and made hang detection more
                                accurate.
                            </li>
                            <li>
                                <strong>Merge:</strong> fixed multiple issues that ended up leaving modules half-merged,
                                which hit users over 4,000 times in six months.
                            </li>
                        </ExperienceGroup>
                        <ExperienceGroup heading="People">
                            <li>
                                <strong>Mentoring:</strong> mentored other engineers through the IDE's codebase and
                                development process, onboarded new ones, ran knowledge sharing sessions, and reviewed
                                architecture and code across teams.
                            </li>
                        </ExperienceGroup>
                        <ExperienceGroup heading="Earlier (2017 – 2021)">
                            <li>
                                <strong>Service Studio for macOS:</strong> one of the first members of the team that
                                moved the IDE from Windows-only WPF to React and TypeScript, so it could run on macOS
                                (launched in 2021); built its cross-platform drag and drop.
                            </li>
                            <li>
                                <strong>Version control and merge:</strong> in the Collaboration team, worked on version
                                control and merge so teams could share their work.
                            </li>
                        </ExperienceGroup>
                    </ExperienceEntry>
                    <ExperienceEntry
                        role="Software Engineer"
                        organization="Wintouch"
                        period="2014 – 2016"
                        tools={["C#", "Angular", "SQL Server"]}>
                        <p>
                            I was part of the core team of a SaaS product released at the end of 2016, building its
                            RESTful web services (C#) and its web component based applications (Angular).
                        </p>
                    </ExperienceEntry>
                </div>
            </PageSection>

            <PageSection id="projects" title="Side projects" icon={CodeIcon}>
                <div className="timeline">
                    <ExperienceEntry
                        role="Plano Financeiro"
                        organization="planofinanceiro.pt · personal project, in progress"
                        period="2026 – Present"
                        tools={financeAppTools}>
                        <p>
                            A personal finance app built on an AI agent that reads Portuguese invoices and receipts
                            (photos and PDFs) into structured data, for a web app, a mobile app and an MCP server that
                            other chatbots can use.
                        </p>
                    </ExperienceEntry>
                </div>
            </PageSection>

            <PageSection id="education" title="Education" icon={GraduationCapIcon}>
                <div className="timeline">
                    <ExperienceEntry
                        role="Licentiate and master's degree"
                        organization="University of Minho"
                        period="2011 – 2017">
                        <p>
                            Master's focused on{" "}
                            <a href="http://www4.di.uminho.pt/~rcm/mestrados/mei/EN/EA.html">
                                Applications Engineering
                            </a>{" "}
                            and{" "}
                            <a href="http://www4.di.uminho.pt/~rcm/mestrados/mei/EN/BI.html">Business Intelligence</a>.
                            My <a href="https://hdl.handle.net/1822/79855/">thesis</a>, done at OutSystems, on automatic
                            refactoring of business logic, became a paper at{" "}
                            <a href="http://inforum.org.pt/INForum2017">INForum 2017</a>.
                        </p>
                    </ExperienceEntry>
                </div>
            </PageSection>

            <PageSection id="languages" title="Languages" icon={TranslateIcon}>
                <ul className="languages">
                    <li>Portuguese (native)</li>
                    <li>English</li>
                </ul>
            </PageSection>
        </PageLayout>
    );
}
