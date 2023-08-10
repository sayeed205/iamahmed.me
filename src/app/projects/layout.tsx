import { Metadata } from 'next';

interface ProjectLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Projects by Sayed Ahmed',
};

export default function ProjectLayout({ children }: ProjectLayoutProps) {
    return <div className="">{children}</div>;
}
