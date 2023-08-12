import { Metadata } from 'next';

interface SkillsLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact Sayed Ahmed',
};

export default function SkillsLayout({ children }: SkillsLayoutProps) {
    return <div className="">{children}</div>;
}
