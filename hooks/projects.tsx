import { useQuery } from "@apollo/client";
import { PROJECTS_QUERY } from "@/queries";

import { ProjectsCollection } from "@/types/project";


export function useProjects() {
  const { data, loading, error } = useQuery<{projectsCollection: ProjectsCollection;}>(PROJECTS_QUERY);
  return { data, loading, error };
}
