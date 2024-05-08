import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { i18n, Locale } from '@/i18n-config';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getDirection(lang: string) {
    return lang === 'fa' || lang === 'ar' ? 'rtl' : 'ltr';
}

export function isRtl(lang: string) {
    return lang === 'fa' || lang === 'ar';
}

export function getLinksLang(lang: Locale) {
    return lang === i18n.defaultLocale ? '' : `/${lang}`;
}