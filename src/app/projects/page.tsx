import ProjectCard, { ProjectCardProps } from '@/components/ui/project-card';
import { ProjectHeading } from '@/components/heading';

const Projects = async () => {
    const ProjectsData: ProjectCardProps[] = await fetch(
        process.env.PROJECTS!,
    ).then((res) => res.json());

    return (
        <main className="h-screen pt-24 pb-32 overflow-auto text-center sm:pb-20 md:pb-10">
            <ProjectHeading />

            <section className="flex items-center justify-center">
                <div className="relative grid grid-rows-4 gap-2 md:grid-cols-2 md:grid-rows-2 md:mb-12 lg:gap-3 ">
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
