import { getDictionary } from '@/get-dictionary';
import PartnersPage from '@/app/[lang]/partners/components/partners-page';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
    { params: { lang } },
    parent?: ResolvingMetadata
): Promise<Metadata> {
    const dict = await getDictionary(lang);
    const seoTitle = dict.partnersSeoTitle;

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

export default async function Partners({ params: { lang } }) {
    const dict = await getDictionary(lang);

    return <PartnersPage dict={dict} lang={lang} />;
}
