// In your component (e.g., pages/story.tsx)
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';

export default function Story() {
  const [storyContent, setStoryContent] = useState<{
    data: { [key: string]: any };
    content: string;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/stories/princess_rues_big_adventure.md'); // Fetch the whole story
        const text = await response.text();
        const { data, content } = matter(text);
        setStoryContent({ data, content });
      } catch (error) {
        console.error("Error fetching or processing story:", error);
      }
    };

    fetchData();
  }, []);

  if (!storyContent) {
    return <div>Loading...</div>;
  }

  const pages = storyContent.content.split('# Page ').filter(page => page.trim() !== '');

  return (
    <div>
      <h1>{storyContent.data.title}</h1>
      {pages.map((page, index) => {
        const pageData = matter(page);
        return (
          <div key={index}>
            <img src={pageData.data.image} alt={`Page ${index + 1}`} />
            <ReactMarkdown>{pageData.content}</ReactMarkdown>
          </div>
        );
      })}
    </div>
  );
}
