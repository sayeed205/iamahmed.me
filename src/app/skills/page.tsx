import SkillCard, { SkillInfo } from '@/components/ui/skill-card';
import { SkillsHeading } from '@/components/heading';

const Skills = async () => {
    const ProjectsData: SkillInfo[] = await fetch(process.env.SKILLS!).then(
        (res) => res.json(),
    );

    return (
        <main className="h-screen pt-24 pb-32 overflow-auto text-center sm:pb-20 md:pb-10">
            <SkillsHeading />

            <section className="flex items-center justify-center align-middle">
                <div className="relative grid grid-cols-1 gap-2 sm:mx-14 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 ">
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
