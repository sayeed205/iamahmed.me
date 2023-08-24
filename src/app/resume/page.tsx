const Resume = () => {
    return (
        <main className="items-center h-screen overflow-auto text-center align-middle ">
            <object data="/resume.pdf" type="application/pdf">
                <embed src="/resume.pdf" className=""></embed>
            </object>
        </main>
    );
};

export default Resume;
