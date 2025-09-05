import Tree from 'rc-tree';
import React, { useEffect, useState } from 'react';
import { strapiAPI } from '@/lib/strapi';

const Sidebar = () => {
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await strapiAPI.getCategories();
        const categories = response.data.data.map(cat => ({
          title: cat.attributes.name,
          key: cat.id,
          children: cat.attributes.children?.data.map(sub => ({
            title: sub.attributes.name,
            key: sub.id
          })) || []
        }));
        categories.push({
          title: 'News',
          key: 'news'
        });
        setTreeData(categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Fallback to static data
        setTreeData([
          {
            title: 'Category 1',
            key: '1',
            children: [
              {
                title: 'Sub 1',
                key: '1-1'
              }
            ]
          },
          {
            title: 'News',
            key: 'news'
          }
        ]);
      }
    };
    fetchCategories();
  }, []);

  return (
    <aside className="w-64 bg-gray-100 p-4">
      <Tree
        treeData={treeData}
        defaultExpandAll={true}
        onSelect={(selectedKeys) => {
          if (selectedKeys.includes('news')) {
            window.location.href = '/news';
          } else {
            window.location.href = `/category/${selectedKeys[0]}`;
          }
        }}
      />
    </aside>
  );
};

export default Sidebar;
