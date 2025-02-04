"use client";

import Loader from "@/components/loader";
import Show from "@/components/Show";
import ConferenceTicketGenerator from "../projects/conference-ticket-generator/ConferenceTicketGenerator";
import NoteTakingApp from "../projects/note-taking-app/NoteTakingApp";
import TechBookClubLandingPage from "../projects/tech-book-club-landing-page/TechBookClubLandingPage";

interface ProjectRendererProps {
    slug: string;
}

const projectComponents: Record<string, React.FC> = {
    'note-taking-web-app': NoteTakingApp,
    'conference-ticket-generator': ConferenceTicketGenerator,
    'tech-book-club-landing-page': TechBookClubLandingPage
}

export default function ProjectRenderer({ slug }: ProjectRendererProps) {
    const ComponentToRender = projectComponents[slug]
    return (
        <main>
            <Show when={ComponentToRender} fallback={<p>No project found with slug: {slug}</p>}>
                {() => (
                    <Loader timer={500}>
                        <ComponentToRender />
                    </Loader>
                )}
            </Show>
        </main>
    );
}