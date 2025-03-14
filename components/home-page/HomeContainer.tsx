'use client'

import { useBlogPosts } from "@/hooks/blog";
import ImageGallerySection from "./ImageGallerySection";
import IntroSection from "./IntroSection";
import ContentSection from "./ContentSection";
import Show from "../Show";
import Loader from "../loader";


export default function HomeContainer() {
    const { data, loading, error } = useBlogPosts();

    return (
        <Loader timer={500} >
            <div className="home-page">
                <IntroSection />
                <ImageGallerySection />
                <Show when={!loading} fallback={<p>Loading...</p>}>
                    <Show when={!error} fallback={<p className="text-red-500">Error Loading Content</p>}>
                        <Show when={data} fallback={<p>No content available</p>}>
                            {(posts) => <ContentSection data={posts} />}
                        </Show>
                    </Show>
                </Show>
            </div>
        </Loader>

    )
}