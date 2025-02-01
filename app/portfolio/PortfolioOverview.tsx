"use client";
import React from 'react'
import { useProjects } from '@/hooks/blog';

import Loader from '@/components/loader';
import Show from '@/components/Show';
import ProjectList from './ProjectList';
function PortfolioOverview() {
    const { data, loading, error } = useProjects();
    const projects = data?.projectsCollection.items;
    console.log(projects);
    return (
        <Loader timer={2000}>
            <div className='max-w-[1200px] m-auto'>
                <Show when={!loading} fallback={<div>Loading...</div>}>
                    <Show when={!error} fallback={<div>Error Loading!</div>}>
                        <ProjectList projects={projects} />
                    </Show>
                </Show>
            </div>
        </Loader>
    )
}

export default PortfolioOverview;

