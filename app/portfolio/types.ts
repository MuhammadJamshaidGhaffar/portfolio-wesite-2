export type ProjectType = {
    name: string;
    image: string;
    shortDescription: string;
    order: number;
    githubUrl?: string;
    hostedUrl?: string;
  };
  
  export type ContentfulProjectType = {
    fields: Omit<ProjectType, "image"> & {
      image: {
        fields: {
          file: {
            url: string;
          };
          title: string;
        };
      };
    };
  };