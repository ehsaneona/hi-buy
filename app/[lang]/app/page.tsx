import { getDictionary } from '@/get-dictionary';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
    { params: { lang } },
    parent?: ResolvingMetadata
): Promise<Metadata> {
    const dict = await getDictionary(lang);
    const seoTitle = dict.appSeoTitle;

    return {
        title: seoTitle,
        openGraph: {
            title: seoTitle,
        },
        alternates: {
            canonical: '',
        },
    };
}

export default async function App({ params: { lang } }) {
    const dict = await getDictionary(lang);

    return (
        <main className="flex !h-[calc(100vh-92px)] flex-col items-center justify-between gap-2.5 pt-4">
            <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
                <div className="mb-4 w-fit rounded-full bg-gray px-6 py-1.5 text-sm">
                    {dict.appBadge}
                </div>
                <h1 className="mx-auto max-w-md text-[44px] font-semibold leading-normal">
                    {dict.appH1S1}{' '}
                    <span className="text-secondary">{dict.appH1S2}</span>
                </h1>
                <h3 className="mt-6">{dict.appH1Paragraph}</h3>
            </div>
            <div className="flex w-full max-w-6xl items-center justify-evenly gap-4">
                <div className="w-full text-center">
                    <div className="flex items-center justify-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="25"
                            fill="none"
                            viewBox="0 0 26 25"
                        >
                            <path
                                stroke="#2DD570"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M12.742 2.344c-5.518.159-9.867 4.766-9.708 10.283.159 5.518 4.766 9.867 10.284 9.708 5.517-.159 9.867-4.766 9.708-10.283a10.047 10.047 0 00-3.123-6.993 10.03 10.03 0 00-7.161-2.715z"
                            ></path>
                            <path
                                stroke="#2DD570"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M3.646 15.811l.058-.062c1.524-1.614 4.579 1.63 6.287-.18 1.525-1.615-.902-3.906 1.389-6.333 2.155-2.283.676-3.951-1.75-6.242l-.052-.049M12.737 22.322a2.816 2.816 0 01-.204-.504 3.353 3.353 0 01.786-3.254 3.363 3.363 0 013.214-.943 3.344 3.344 0 012.418 2.311c.034.13.058.259.072.399"
                            ></path>
                        </svg>
                        <span className="text-lg font-medium">
                            {dict.appPros1H1}
                        </span>
                    </div>
                    <div className="text-base font-medium text-blue-grey">
                        {dict.appPros1P}
                    </div>
                    <div className="mt-6 rounded-full border border-black/5 px-[70px] py-3.5 text-center">
                        <div className="flex items-center justify-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="25"
                                fill="none"
                                viewBox="0 0 24 25"
                            >
                                <g
                                    stroke="#2C99F8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    clipPath="url(#clip0_220_941)"
                                >
                                    <path d="M17.61 14.601h-4.92c-.23 0-.35-.26-.22-.44l3.27-4.35c.16-.21.5-.1.49.17l-.11 5.78M6.4 11.21c0-.89.72-1.61 1.6-1.61.89 0 1.61.72 1.61 1.61 0 2.01-3.22 2.01-3.22 4.39h3.22M22 15.68c0 3.87-3.13 7-7 7l1.05-1.75M2 9.68c0-3.87 3.13-7 7-7L7.95 4.43"></path>
                                    <path d="M22 15.68c0 3.87-3.13 7-7 7l1.05-1.75M2 9.68c0-3.87 3.13-7 7-7L7.95 4.43"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_220_941">
                                        <path
                                            fill="#fff"
                                            d="M0 0H24V24H0z"
                                            transform="translate(0 .68)"
                                        ></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="font-medium text-black">
                                {dict.appPros2H1}
                            </span>
                        </div>
                        <div className="mt-2 text-blue-grey/40">
                            {dict.appPros2P}
                        </div>
                    </div>
                    <div className="mt-6 rounded-full border border-black/5 px-[70px] py-3.5 text-center">
                        <div className="flex items-center justify-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="25"
                                fill="none"
                                viewBox="0 0 24 25"
                            >
                                <g
                                    stroke="#2C99F8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    clipPath="url(#clip0_220_941)"
                                >
                                    <path d="M17.61 14.601h-4.92c-.23 0-.35-.26-.22-.44l3.27-4.35c.16-.21.5-.1.49.17l-.11 5.78M6.4 11.21c0-.89.72-1.61 1.6-1.61.89 0 1.61.72 1.61 1.61 0 2.01-3.22 2.01-3.22 4.39h3.22M22 15.68c0 3.87-3.13 7-7 7l1.05-1.75M2 9.68c0-3.87 3.13-7 7-7L7.95 4.43"></path>
                                    <path d="M22 15.68c0 3.87-3.13 7-7 7l1.05-1.75M2 9.68c0-3.87 3.13-7 7-7L7.95 4.43"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_220_941">
                                        <path
                                            fill="#fff"
                                            d="M0 0H24V24H0z"
                                            transform="translate(0 .68)"
                                        ></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="font-medium text-black">
                                {dict.appPros3H1}
                            </span>
                        </div>
                        <div className="mt-2 text-blue-grey/40">
                            {dict.appPros3P}
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center">
                    <img className="w-80" src="/phone.png" alt="" />
                </div>
                <div className=" w-full">
                    <div className="mb-2 flex items-center gap-2">
                        <span className="text-base font-medium">
                            {dict.appPros4H1}
                        </span>
                    </div>
                    <div className="text-base font-medium text-black/70">
                        {dict.appPros4P}
                    </div>
                    <div className="mt-6 max-w-fit rounded-full border border-black/5 px-16 py-3 text-center">
                        <img src="/appstore.png" alt="" />
                    </div>
                    <div className="mt-6 max-w-fit rounded-full border border-black/5 px-16 py-3 text-center">
                        <img src="/playstore.png" alt="" />
                    </div>
                </div>
            </div>
        </main>
    );
}
