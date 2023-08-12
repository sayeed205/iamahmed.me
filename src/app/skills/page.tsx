import SkillCard, { SkillInfo } from '@/components/ui/skill-card';
import { SkillsHeading } from '@/components/heading';

const Skills = async () => {
    const ProjectsData: SkillInfo[] = await fetch(process.env.SKILLS!).then(
        (res) => res.json(),
    );

    return (
        <main className="mb-7 h-[calc(100vh-10rem)] overflow-auto pt-5 text-center">
            <SkillsHeading />

            <section className="flex justify-center">
                <div className="grid-rows-8 lg:grid-col-3 relative grid gap-2 sm:mx-14 sm:mt-12 sm:grid-cols-2 sm:grid-rows-5 lg:grid-flow-col lg:grid-rows-3 lg:gap-5">
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
        </main>
    );
};

export default Skills;
