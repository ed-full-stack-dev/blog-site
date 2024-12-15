import { useEffect } from 'react';

interface UseSEOParams {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  datePublished?: string;
}

export const useSEO = (params?: Partial<UseSEOParams>) => {
  const {
    title = "E-Rojas Blog",
    description = "A blog about web development, software engineering, and more.",
    keywords = "web development, software engineering, react, javascript",
    image = "https://images.ctfassets.net/d502s68us4nn/3kmYZyqYM6yWqNmV7yXba4/8451e85360d6a1d735773daf25a0d3a1/Screenshot_2024-12-11_at_9.32.24_PM.png",
    url = "https://e-rojas.io",
    datePublished = new Date().toISOString().split('T')[0],
  } = params || {};

  useEffect(() => {
    // Remove all existing SEO-related meta tags
    const existingMetaTags = document.querySelectorAll(
      'meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"]'
    );
    existingMetaTags.forEach((tag) => tag.parentNode?.removeChild(tag));

    // Set document title
    document.title = title;

    // Define new meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'image', property: 'og:image', content: image },
      { name: 'title', property: 'og:title', content: title },
      { name: 'date', property: 'article:published_time', content: datePublished },
      { name: 'description', property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    // Add new meta tags
    metaTags.forEach(({ name, property, content }) => {
      if (content) {
        const metaTag = document.createElement('meta');
        if (name) metaTag.name = name;
        if (property) metaTag.setAttribute('property', property);
        metaTag.content = content;
        document.head.appendChild(metaTag);
      }
    });

    // Add or update the canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', url);

    // Cleanup: Remove tags added by this hook on unmount
    return () => {
      metaTags.forEach(({ name, property }) => {
        const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
        const metaTag = document.querySelector(selector);
        if (metaTag) metaTag.parentNode?.removeChild(metaTag);
      });

      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) canonicalLink.parentNode?.removeChild(canonicalLink);
    };
  }, [title, description, keywords, image, url, datePublished]);
};
