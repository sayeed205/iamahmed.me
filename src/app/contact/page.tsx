import ContactCard, { ContactInfo } from '@/components/ui/contact-card';
import { ContactHeading } from '@/components/heading';
import { Icons } from '@/components/icons';

const Contacts = async () => {
    const ContactData: ContactInfo[] = [
        {
            id: 1,
            social: 'LinkedIn',
            username: '@sayeed205',
            link: 'https://www.linkedin.com/in/sayeed205/',
            image: <Icons.linkedin size={'2em'} />,
        },
        {
            id: 2,
            social: 'GitHub',
            username: '@sayeed205',
            link: 'https://gitHub.com/sayeed205',
            image: <Icons.gitHub size={'2em'} />,
        },
        {
            id: 3,
            social: 'Telegram',
            username: '@sayeed69',
            link: 'https://t.me/sayeed69',
            image: <Icons.telegram size={'2em'} />,
        },
        {
            id: 4,
            social: 'Twitter',
            username: '@Sayeed81828980',
            link: 'https://twitter.com/Sayeed81828980',
            image: <Icons.twitter size={'2em'} />,
        },
        {
            id: 5,
            social: 'Email',
            username: 'sayeed205@gmail.com',
            link: 'mailto:sayeed205@gmail.com',
            image: <Icons.mail size={'2em'} />,
        },
        {
            id: 6,
            social: 'Bio.link',
            username: '@hitarashi',
            link: 'https://hitarashi.bio.link/',
            image: <Icons.bio />,
        },
    ];

    return (
        // <main className="py-20 text-center ">
        <main className="h-screen pt-24 pb-32 overflow-auto text-center sm:pb-20 md:pb-10">
            <ContactHeading />

            <section className="flex items-center justify-center">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 sm:mt-12">
                    {ContactData.map((props) => (
                        <ContactCard
                            key={props.id}
                            image={props.image}
                            link={props.link}
                            social={props.social}
                            username={props.username}
                            id={props.id}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Contacts;
