import { ProductListContainer } from './product-list-container';
import React from 'react';

function Project({ sysId }:{ sysId: string }) {
  const renderProject = (id:string) => {
    switch (id) {
      case '62S5WzYkA3uJccKcLGdne3':
        return <ProductListContainer />;
      case '2':
        return <div>Project 2</div>;
      case '3':
        return <div>Project 3</div>;
      default:
        return <div>No Blog Project to Render</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {renderProject(sysId)}
    </div>
  );
}

export default Project;
