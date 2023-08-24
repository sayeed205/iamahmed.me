import { ScrollArea } from '@/components/ui/scroll-area';
import SkillCard, { SkillInfo } from '@/components/ui/skill-card';
import { SkillsHeading } from '@/components/heading';

const Skills = async () => {
    const ProjectsData: SkillInfo[] = await fetch(process.env.SKILLS!).then(
        (res) => res.json(),
    );

    return (
        <main className="mb-7 h-[calc(100vh-10rem)] overflow-auto pt-5 text-center">
            <SkillsHeading />

            <ScrollArea className="">
                <section className="flex items-center justify-center align-middle">
                    <div className="relative grid grid-cols-1 gap-2 mb-10 sm:mx-14 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 z-[51]">
                        {ProjectsData.map((props) => (
                            <SkillCard
                                key={props.id}
                                title={props.title}
                                language={props.language}
                                id={props.id}
                            />
                        ))}
                    </div>
                </section>
            </ScrollArea>
        </main>
    );
};

export default Skills;
