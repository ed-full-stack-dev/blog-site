'use client'

import { useBlogPosts } from "@/hooks/blog";
import ImageGallerySection from "./ImageGallerySection";
import IntroSection from "./IntroSection";
import ContentSection from "./ContentSection";


export default function HomeContainer() {
    const { data, loading, error } = useBlogPosts();
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error Loading Content</p>
    console.log('data', data)
    return (
        <div className="home-page">
            <IntroSection />
            <ImageGallerySection />
            <ContentSection data={data} />
        </div>

    )
}