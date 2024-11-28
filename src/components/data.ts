// src/components/data.ts

interface Post {
    id: number;
    title: string;
    summary: string;
    category: string;
    author: string;
    date: string;
    imageUrl: string;
    authorProfileUrl: string;
    imgHeight: string | undefined;
}
export const posts: Post[] = [
    {
        id: 1,
        title: 'Revolutionizing software development with cutting-edge tools',
        summary: 'Our latest engineering tools are designed to streamline workflows...',
        category: 'Engineering',
        author: 'Remy Sharp',
        date: 'July 14, 2021',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorProfileUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgHeight: 'h-48',
    },
    {
        id: 2,
        title: 'Innovative product features that drive success',
        summary: 'Explore the key features of our latest product release...',
        category: 'Product',
        author: 'Erica Johns',
        date: 'July 20, 2021',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorProfileUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgHeight: 'h-48',
    },
    {
        id: 3,
        title: 'Building a more inclusive product design strategy',
        summary: 'Learn how our team focuses on inclusivity in the design process...',
        category: 'Design',
        author: 'Alex Lee',
        date: 'August 5, 2021',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorProfileUrl: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgHeight: 'h-48',
    },
    {
        id: 4,
        title: 'Harnessing the power of AI in modern applications',
        summary: 'Discover how AI is transforming the way we create software...',
        category: 'Technology',
        author: 'Samantha Fox',
        date: 'August 12, 2021',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorProfileUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgHeight: 'h-48',
    },
    {
        id: 5,
        title: 'How to improve team productivity using agile methodologies',
        summary: 'Tips and best practices for adopting agile to boost team efficiency...',
        category: 'Management',
        author: 'John Doe',
        date: 'September 1, 2021',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorProfileUrl: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgHeight: 'h-48',
    },
    {
        id: 6,
        title: 'Embracing cloud-native solutions for scalability',
        summary: 'Understand the benefits of migrating to a cloud-native architecture...',
        category: 'Cloud',
        author: 'Morgan Smith',
        date: 'September 10, 2021',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorProfileUrl: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgHeight: 'h-48',
    },
    {
        id: 7,
        title: 'Exploring the future of user experience design',
        summary: 'How UX trends are evolving to shape the future of digital experiences...',
        category: 'Design',
        author: 'Hannah Green',
        date: 'September 18, 2021',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
         authorProfileUrl: 'https://images.unsplash.com/photo-1502720705749-3c8d0f4e9d59?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgHeight: 'h-48',
    },
    {
        id: 8,
        title: 'Top 10 engineering practices for a resilient codebase',
        summary: 'Learn about the engineering best practices that lead to maintainable code...',
        category: 'Engineering',
        author: 'Jake Wright',
        date: 'October 2, 2021',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorProfileUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgHeight: 'h-48',
    },
    {
        id: 9,
        title: 'Strategies for scaling product management processes',
        summary: 'Understand how to effectively scale product management in a growing team...',
        category: 'Product',
        author: 'Laura Brown',
        date: 'October 10, 2021',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorProfileUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgHeight: 'h-48',
    },
    {
        id: 10,
        title: 'Securing web applications: A comprehensive guide',
        summary: 'Explore the top practices to secure your web applications from threats...',
        category: 'Security',
        author: 'Nina Patel',
        date: 'October 15, 2021',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorProfileUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgHeight: 'h-48',
    },
    {
        id: 11,
        title: 'DevOps best practices for continuous integration and deployment',
        summary: 'Learn about effective CI/CD pipelines to improve software delivery...',
        category: 'DevOps',
        author: 'Chris Evans',
        date: 'October 20, 2021',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorProfileUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgHeight: 'h-48',
    },
    {
        id: 12,
        title: 'Leveraging data analytics to drive business growth',
        summary: 'How data analytics is empowering businesses to make informed decisions...',
        category: 'Data',
        author: 'Anita Desai',
        date: 'October 25, 2021',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        authorProfileUrl: 'https://images.unsplash.com/photo-1520614073990-dd602f14af6f?q=80&w=3220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imgHeight: 'h-48',
    }
];
