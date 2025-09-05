import React, { useEffect, useState } from 'react';
import { strapiAPI } from '@/lib/strapi';

const Page = ({ params }: { params: { slug: string[]} }) => {
  const [content, setContent] = useState(null);
  const slug = params.slug.join('/');

  useEffect(() => {
    const fetchPage = async () => {
      try {
        // Fetch by slug or id, assume category or page
        const response = await strapiAPI.getPages();
        const page = response.data.data.find(p => p.attributes.slug === slug);
        if (page) {
          setContent(page.attributes.content);
        } else {
          // Fetch category
          const catResponse = await strapiAPI.getCategories();
          const category = catResponse.data.data.find(c => c.attributes.slug === slug);
          if (category) {
            // Render category cards
            setContent(category.attributes.name);
          }
        }
      } catch (error) {
        console.error('Error fetching page:', error);
      }
    };
    fetchPage();
  }, [slug]);

  return (
    <div>
      <h1>Page or Category: {slug}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default Page;
