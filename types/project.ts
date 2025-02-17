type ProjectImage = {
    url: string;
    title: string;
  };
  
  export type Project = {
    sys: {
      id: string;
    };
    title: string;
    slug: string;
    extras: string[];
    languages: string[];
    description: string;
    brief: string;
    imagesCollection: {
      items: ProjectImage[];
    };
  };
  
  export type ProjectsCollection = {
    items: Project[];
  };
  
 
  