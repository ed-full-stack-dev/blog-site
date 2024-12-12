import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  datePublished: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, image, url, datePublished }) => {
  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'image', property: 'og:image', content: image },
      { name: 'title', property: 'og:title', content: title },
      { name: 'author', property: 'og:author', content: 'Edgar Rojas' },
      { name: 'date', property: 'article:published_time', content: datePublished },
      { name: 'description', property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    metaTags.forEach(({ name, property, content }) => {
        const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
        let metaTag = document.querySelector(selector) as HTMLMetaElement;
        if (metaTag) {
          metaTag.setAttribute('content', content);
        } else {
          metaTag = document.createElement('meta');
          if (name) metaTag.name = name;
          if (property) metaTag.setAttribute('property', property);
          metaTag.content = content;
          document.head.appendChild(metaTag);
        }
      });

    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', url);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = url;
      document.head.appendChild(link);
    }

    const linkFavicon = document.querySelector('link[rel="icon"]');
    if (!linkFavicon) {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = '/favicon.ico';
      document.head.appendChild(link);
    }
  }, [title, description, keywords, image, url, datePublished]);

  return null;
};

export default SEO;