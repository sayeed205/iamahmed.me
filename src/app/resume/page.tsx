const Resume = () => {
    return (
        <main className="z-50 h-[calc(100vh-10rem)] items-center overflow-auto text-center align-middle ">
            <object data="/resume.pdf" type="application/pdf">
                <embed src="/resume.pdf" className="z-50 "></embed>
            </object>
        </main>
    );
};

export default Resume;
