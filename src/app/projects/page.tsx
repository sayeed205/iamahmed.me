import ProjectCard, { ProjectCardProps } from '@/components/ui/project-card';
import { ProjectHeading } from '@/components/heading';

const Projects = async () => {
    const ProjectsData: ProjectCardProps[] = await fetch(
        process.env.PROJECTS!
    ).then((res) => res.json());

    return (
        <main className="mb-7 h-[calc(100vh-10rem)] overflow-auto pt-5 text-center">
            <ProjectHeading />

            <section className="flex items-center justify-center">
                <div className="lg:grid-col-2 relative grid grid-rows-6 gap-2 overflow-hidden sm:mt-12 sm:grid-cols-2 sm:grid-rows-3 sm:gap-4 md:z-40 lg:gap-6 xl:gap-8">
                    {ProjectsData.map((props) => (
                        <ProjectCard
                            key={props.id}
                            title={props.title}
                            desc={props.desc}
                            role={props.role}
                            lang={props.lang}
                            link={props.link}
                            id={props.id}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Projects;
