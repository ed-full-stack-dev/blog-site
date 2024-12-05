export const calculateReadTime = (content: any) => {
    const plainText = content.content
        .map((node: any) => node.content.map((childNode: any) => childNode.value).join(' '))
        .join(' ');
    const wordCount = plainText.split(/\s+/).length;
    return Math.ceil(wordCount / 200); // Assuming average reading speed of 200 words per minute
};