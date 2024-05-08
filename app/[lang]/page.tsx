import HomePage from '@/app/[lang]/components/home-page';
import { getDictionary } from '@/get-dictionary';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
    { params: { lang } },
    parent?: ResolvingMetadata
): Promise<Metadata> {
    const dict = await getDictionary(lang);
    const seoTitle = dict.homeSeoTitle;

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

export default async function Home({ params: { lang } }) {
    const dict = await getDictionary(lang);

    return <HomePage dict={dict} lang={lang} />;
}
