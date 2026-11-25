import { ShieldCheckIcon } from "@phosphor-icons/react";
import { ExternalLink } from "../shared/external-links";
import { PageLayout } from "../shared/page-layout";
import { PageSection } from "../shared/page-section";
import { Route } from "../shared/route";

export function PrivacyPage() {
    return (
        <PageLayout currentRoute={Route.Privacy}>
            <PageSection id="privacy" title="Privacy" icon={ShieldCheckIcon}>
                <div className="text">
                    <p>This site doesn't collect any data about you. No analytics, no ads, no cookies, no tracking.</p>
                    <p>
                        If you switch between light and dark mode, your browser remembers it. It stays on your device.
                    </p>
                    <p>
                        The site is hosted on GitHub Pages, and GitHub logs visitors' IP addresses for security. More on
                        that in <a href={ExternalLink.GitHubPagesDataCollection}>GitHub's docs</a>.
                    </p>
                    <p>If you email me, I'll only use it to reply.</p>
                </div>
            </PageSection>
        </PageLayout>
    );
}
