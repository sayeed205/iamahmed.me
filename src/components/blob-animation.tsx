import Image from 'next/image';

const BlobAnimation = () => (
    <>
        <div className="hidden lg:block">
            <div className={`pointer-events-none absolute -left-24 -top-40 `}>
                <Image
                    src={'/blobs/blob.svg'}
                    alt="blob"
                    width={400}
                    height={400}
                />
            </div>
            <div
                className={`md:ml-128 lg:ml-162 xl:ml-180 pointer-events-none absolute -right-20 bottom-32 `}
            >
                <Image
                    src={'/blobs/blob.svg'}
                    alt="blob"
                    width={400}
                    height={400}
                />
            </div>
            <div
                className={`pointer-events-none absolute bottom-0 -mb-16 -ml-40 h-96 w-96`}
            >
                <Image
                    src={'/blobs/blob.svg'}
                    alt="blob"
                    width={400}
                    height={400}
                />
            </div>
        </div>
    </>
);

export default BlobAnimation;
