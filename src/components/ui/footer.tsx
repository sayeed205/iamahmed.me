export function Footer() {
  return (
    <footer className="fixed bottom-0 w-screen bg-background/50 p-2 text-center backdrop-blur-lg backdrop-filter transition duration-500 ease-in-out">
      <div className="container items-center justify-center gap-2 text-center">
        <p className="text-center text-sm leading-loose">
          Made with ❤ by{" "}
          <a
            href="https://github.com/sayeed205"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Sayed Ahmed
          </a>
          . Hosted on{" "}
          <a
            href="https://workers.cloudflare.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Cloudflare Workers
          </a>
          . Inspired by{" "}
          <a
            href="https://milindgoel.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Milind Goel
          </a>
          . The source code is available on{" "}
          <a
            href="https://github.com/sayeed205/iamahmed.me"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
