import ProjectCard, { ProjectCardProps } from '@/components/ui/project-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ProjectHeading } from '@/components/heading';

const Projects = async () => {
    const ProjectsData: ProjectCardProps[] = await fetch(
        process.env.PROJECTS!,
    ).then((res) => res.json());

    return (
        <main className="mb-7 h-[calc(100vh-10rem)] overflow-auto pt-5 text-center">
            <ProjectHeading />

            <ScrollArea className="">
                {/* <div className="relative grid grid-rows-6 gap-2 overflow-hidden lg:grid-col-2 sm:mt-12 sm:grid-cols-2 sm:grid-rows-3 sm:gap-4 md:z-40 lg:gap-6 xl:gap-8"> */}
                <section className="flex items-center justify-center">
                    <div className="relative grid grid-rows-4 gap-2 mb-24 md:grid-cols-2 md:grid-rows-2 md:mb-12 lg:gap-3 sm:mt-12">
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
                        {/* </div> */}
                    </div>
                </section>
            </ScrollArea>
        </main>
    );
};

export default Projects;
