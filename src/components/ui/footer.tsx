import Link from 'next/link';

export function Footer() {
    return (
        <footer className="fixed bottom-1 w-screen text-center">
            <div className="container items-center justify-center gap-4 py-10 text-center md:py-2">
                <p className="text-center text-sm leading-loose ">
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