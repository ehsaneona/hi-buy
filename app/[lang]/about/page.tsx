import { getDictionary } from '@/get-dictionary';
import { Metadata, ResolvingMetadata } from 'next';
import AboutPage from '@/app/[lang]/about/components/about-page';

export async function generateMetadata(
    { params: { lang } },
    parent?: ResolvingMetadata
): Promise<Metadata> {
    const dict = await getDictionary(lang);
    const seoTitle = dict.aboutSeoTitle;

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

export default async function About({ params: { lang } }) {
    const dict = await getDictionary(lang);

    return <AboutPage dict={dict} lang={lang} />;
}
