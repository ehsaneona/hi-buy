import ContactPage from '@/app/[lang]/contact/components/contact-page';
import { getDictionary } from '@/get-dictionary';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
    { params: { lang } },
    parent?: ResolvingMetadata
): Promise<Metadata> {
    const dict = await getDictionary(lang);
    const seoTitle = dict.contactSeoTitle;

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

export default async function Contact({ params: { lang } }) {
    const dict = await getDictionary(lang);

    return <ContactPage dict={dict} lang={lang} />;
}
