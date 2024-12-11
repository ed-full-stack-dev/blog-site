import React from 'react';
import { Helmet } from 'react-helmet-async';

interface HelmetProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    author?: string;
    datePublished?: string;
}

const HelmetComponent: React.FC<HelmetProps> = ({
    title = 'Edgar Rojas Blog - Web Development, React', // Default title
    description = 'Explore articles on web development, React, JavaScript, design patterns, and more on E-Rojas.', // Default description
    keywords = 'Web Development, React, JavaScript, MongoDB, HTML, CSS, Design Patterns', // Default keywords
    image = '/home-page-banner.png', // Default image for Open Graph/Twitter
    url = 'https://e-rojas.io', // Default URL
    author = 'E-Rojas',
    datePublished = new Date().toISOString().split('T')[0]
}) => {
    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph Metadata */}
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name='image' property="og:image" content={image} />
            <meta name='title' property="og:title" content={title} />
            <meta name='author' property="og:author" content='Edgar Rojas' />
            <meta name='date' property="article:published_time" content={datePublished} />
            <meta name='description' property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Twitter Card Metadata */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="canonical" href={url} />
        </Helmet>
    );
};

export default HelmetComponent;
