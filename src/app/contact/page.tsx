import { ContactHeading } from '@/components/heading';
import { Icons } from '@/components/icons';
import ContactCard, { ContactInfo } from '@/components/ui/contact-card';

const Contacts = async () => {
    const ContactData: ContactInfo[] = [
        {
            id: 1,
            social: 'LinkedIn',
            username: '@sayeed205',
            link: 'https://www.linkedin.com/in/sayeed205/',
            image: <Icons.linkedin    />,
        },
        {
            id: 2,
            social: 'GitHub',
            username: '@sayeed205',
            link: 'https://gitHub.com/sayeed205',
            image: <Icons.gitHub />,
        },
        {
            id: 3,
            social: 'Telegram',
            username: '@sayeed69',
            link: 'https://t.me/sayeed69',
            image: <Icons.telegram />,
        },
        {
            id: 4,
            social: 'Twitter',
            username: '@Sayeed81828980',
            link: 'https://twitter.com/Sayeed81828980',
            image: <Icons.twitter />,
        },
        {
            id: 5,
            social: 'Email',
            username: 'sayeed205@gmail.com',
            link: 'mailto:sayeed205@gmail.com',
            image: <Icons.mail />,
        },
        {
            id: 6,
            social: 'Bio.link',
            username: '@hitarashi',
            link: 'https://hitarashi.bio.link/',
            image: <Icons.bio />,
        },
        {
            id: 7,
            social: 'Spotify',
            username: '@Hitarashi',
            link: 'https://open.spotify.com/user/31wgrcodyvofq7iqkfg45v2uftl4',
            image: <Icons.spotify />,
        },
        {
            id: 8,
            social: 'Reddit',
            username: 'u/sayeed205',
            link: 'https://www.reddit.com/user/sayeed205',
            image: <Icons.reddit />,
        },
    ];

    return (
        // <main className="py-20 text-center ">
        <main className="mb-7 h-[calc(100vh-10rem)] overflow-auto pt-5 text-center">
            <ContactHeading />

            <section className="flex items-center justify-center">
                <div className="grid grid-rows-6 gap-4 md:grid-cols-2 md:gap-12">
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
