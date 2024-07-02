'use client';

import { useCallback, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import { Button } from '@/components/ui/button';

import './resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};

const maxWidth = 800;

type PDFFile = string | File | null;

export default function Resume() {
    const [numPages, setNumPages] = useState<number>();
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>();

    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries;

        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    useResizeObserver(containerRef, resizeObserverOptions, onResize);

    return (
        <div className="pt-10 overflow-auto Example">
            <div className="Example__container">
                <div
                    className="flex flex-col justify-center w-full Example__container__document sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[28%]"
                    ref={setContainerRef}
                >
                    <Document file="./sayed_resume.pdf" options={options}>
                        {Array.from(new Array(numPages), (el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                width={
                                    containerWidth
                                        ? Math.min(containerWidth, maxWidth)
                                        : maxWidth
                                }
                            />
                        ))}
                    </Document>
                    <Button
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = './sayed_resume.pdf';
                            link.download = 'sayed_resume.pdf';
                            link.click();
                        }}
                    >
                        Download
                    </Button>
                </div>
            </div>
        </div>
    );
}
