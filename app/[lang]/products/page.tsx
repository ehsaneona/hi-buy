import { getDictionary } from '@/get-dictionary';
import { Metadata, ResolvingMetadata } from 'next';
import ProductsPage from '@/app/[lang]/products/components/products-page';

export async function generateMetadata(
    { params: { lang } },
    parent?: ResolvingMetadata
): Promise<Metadata> {
    const dict = await getDictionary(lang);
    const seoTitle = dict.productsSeoTitle;

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

export default async function Products({ params: { lang } }) {
    const dict = await getDictionary(lang);

    return <ProductsPage dict={dict} lang={lang} />;
}
