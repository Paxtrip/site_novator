import Tree from 'rc-tree';
import React from 'react';

const Sidebar = () => {
  const treeData = [
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
  ];

  return (
    <aside className="w-64 bg-gray-100 p-4">
      <Tree
        treeData={treeData}
        defaultExpandAll={true}
      />
    </aside>
  );
};

export default Sidebar;
