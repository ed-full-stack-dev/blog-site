import Show from "@/components/Show";
import ConferenceTicketGenerator from "../projects/conference-ticket-generator/ConferenceTicketGenerator";
import TechBookClubLandingPage from "../projects/tech-book-club-landing-page/TechBookClubLandingPage";
import NoteTakingApp from "../projects/note-taking-app/NoteTakingApp";
export type PageProps = {
    params: Promise<{ slug: string }>;
  }
const projectComponents: Record<string, React.FC> = {
    'note-taking-web-app': NoteTakingApp,
    'conference-ticket-generator': ConferenceTicketGenerator,
    'tech-book-club-landing-page' :TechBookClubLandingPage
}
export default async function PortfolioProjectPage({ params} : PageProps) {
    const { slug } = await params;
    const ComponentToRender = projectComponents[slug];
    return (
        <main>
            <Show when={ComponentToRender} fallback={<p>No project found with slug: {slug}</p>} >
                {() => <ComponentToRender />}
            </Show>
        </main>
    )
}

