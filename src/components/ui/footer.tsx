import Link from 'next/link';

export function Footer() {
    return (
        <footer className="fixed bottom-0 w-screen p-2 text-center transition duration-500 ease-in-out bg-background/50 backdrop-filter backdrop-blur-lg ">
            <div className="container items-center justify-center gap-2 text-center">
                <p className="text-sm leading-loose text-center ">
                    Made with ❤ by{' '}
                    <Link
                        href="https://github.com/sayeed205"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        Sayed Ahmed
                    </Link>
                    . Hosted on{' '}
                    <Link
                        href="https://vercel.com"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        Vercel
                    </Link>
                    . Inspired by{' '}
                    <Link
                        href="https://milindgoel.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        Milind Goel
                    </Link>
                    . The source code is available on{' '}
                    <Link
                        href="https://github.com/sayeed205/iamahmed.me"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </Link>
                    .
                </p>
            </div>
        </footer>
    );
}
