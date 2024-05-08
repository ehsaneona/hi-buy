'use client';

import { cn, getDirection, getLinksLang, isRtl } from '@/libs/utils';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import React from 'react';
import Link from 'next/link';
import { InstagramIcon, LinkedinIcon, MenuIcon, TwitterIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Icons } from '@/components/ui/icons';
import { usePathname } from 'next/navigation';
import { useGlobalContext } from '@/contexts/store';

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';

export function Header({ lang, dict }) {
    const path = usePathname();
    const { frameIndex, setFrameIndex } = useGlobalContext();

    return (
        <header
            className="sticky top-0 z-[100] flex h-16 items-center justify-between bg-white px-6 text-sm md:h-[92px] md:px-14">
            <div className="flex items-center gap-3 md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <MenuIcon className="md:hidden" strokeWidth={1.2} />
                    </SheetTrigger>
                    <SheetContent side={isRtl(lang) ? 'right' : 'left'}>
                        <div className="flex h-full flex-col justify-between pt-10">
                            <div>
                                <div className="mt-14 flex flex-col items-start gap-8 text-xl font-black">
                                    <Link
                                        className="flex items-center justify-center gap-3"
                                        href={`${getLinksLang(lang)}/about`}
                                    >
                                        {dict.headerLinks1}
                                    </Link>
                                    <Link
                                        className="flex items-center justify-center gap-3"
                                        href={`${getLinksLang(lang)}/products`}
                                    >
                                        {dict.headerLinks2}
                                    </Link>
                                    <Link
                                        className="flex items-center justify-center gap-3"
                                        href={`${getLinksLang(lang)}/app`}
                                    >
                                        {dict.headerLinks3}
                                    </Link>
                                    <Link
                                        className="flex items-center justify-center gap-3"
                                        href={`${getLinksLang(lang)}/partners`}
                                    >
                                        {dict.headerLinks4}
                                    </Link>
                                    <Link
                                        className="flex items-center justify-center gap-3"
                                        href={`${getLinksLang(lang)}/contact`}
                                    >
                                        {dict.headerLinks5}
                                    </Link>
                                    <div
                                        className="flex items-center justify-center gap-3 cursor-pointer"
                                        onClick={() => {
                                            setFrameIndex(1750);
                                        }}
                                    >
                                        {dict.headerLinks6}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-start justify-center gap-8">
                                    <Link
                                        href="https://www.instagram.com/sahmeto_com"
                                        rel="nofollow"
                                    >
                                        <InstagramIcon strokeWidth={1.125} />
                                    </Link>
                                    <Link
                                        href="https://www.linkedin.com/company/sahmeto"
                                        rel="nofollow"
                                    >
                                        <LinkedinIcon strokeWidth={1.125} />
                                    </Link>
                                    <Link href="#twitter" rel="nofollow">
                                        <TwitterIcon strokeWidth={1.125} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="flex w-full items-center justify-between gap-5">
                <Link href={`${getLinksLang(lang)}/`} onClick={() => {
                    setFrameIndex(0);
                }}>
                    <Icons.logo className="h-7 w-24 cursor-pointer" />
                </Link>
                <NavigationMenu
                    className="hidden text-black/40 md:block"
                    dir={getDirection(lang)}
                >
                    <NavigationMenuList className="w-full gap-7 space-x-0">
                        <NavigationMenuItem className="block">
                            <Link
                                href={`${getLinksLang(lang)}/about`}
                                locale={lang}
                                className={cn({
                                    'relative text-black after:absolute after:-bottom-2.5 after:left-1/2 after:inline-block after:h-0.5 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-primary':
                                        path.includes('/about') ||
                                        (frameIndex >= 0 &&
                                            frameIndex < 330 &&
                                            (path === '/en' || path === '/')),
                                })}
                            >
                                {dict.headerLinks1}
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="block">
                            <Link
                                href={`${getLinksLang(lang)}/products`}
                                className={cn({
                                    'relative text-black after:absolute after:-bottom-2.5 after:left-1/2 after:inline-block after:h-0.5 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-primary':
                                        path.includes('/products') ||
                                        (frameIndex > 561 &&
                                            frameIndex < 740 &&
                                            (path === '/en' || path === '/')),
                                })}
                            >
                                {dict.headerLinks2}
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="block">
                            <Link
                                href={`${getLinksLang(lang)}/app`}
                                className={cn({
                                    'relative text-black after:absolute after:-bottom-2.5 after:left-1/2 after:inline-block after:h-0.5 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-primary':
                                        path.includes('/app') ||
                                        (frameIndex > 852 &&
                                            frameIndex < 1066 &&
                                            (path === '/en' || path === '/')),
                                })}
                            >
                                {dict.headerLinks3}
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="block">
                            <Link
                                href={`${getLinksLang(lang)}/partners`}
                                className={cn({
                                    'relative text-black after:absolute after:-bottom-2.5 after:left-1/2 after:inline-block after:h-0.5 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-primary':
                                        path.includes('/partners') ||
                                        (frameIndex > 1180 &&
                                            frameIndex < 1300 &&
                                            (path === '/en' || path === '/')),
                                })}
                            >
                                {dict.headerLinks4}
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="block">
                            <Link
                                href={`${getLinksLang(lang)}/contact`}
                                className={cn({
                                    'relative text-black after:absolute after:-bottom-2.5 after:left-1/2 after:inline-block after:h-0.5 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-primary':
                                        path.includes('/contact') ||
                                        (frameIndex > 1550 &&
                                            frameIndex < 1650 &&
                                            (path === '/en' || path === '/')),
                                })}
                            >
                                {dict.headerLinks5}
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="cursor-pointer block">
                            <div
                                onClick={() => {
                                    setFrameIndex(1750);
                                }}
                                className={cn({
                                    'relative text-black after:absolute after:-bottom-2.5 after:left-1/2 after:inline-block after:h-0.5 after:w-3 after:-translate-x-1/2 after:rounded-full after:bg-primary':
                                        path.includes('/locations') ||
                                        (frameIndex > 1740 &&
                                            (path === '/en' || path === '/')),
                                })}
                            >
                                {dict.headerLinks6}
                            </div>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-2">
                    <Link
                        href={`/${lang === 'ar' ? 'en' : ''}`}
                        className="px-6 py-3 text-sm font-bold"
                    >
                        {lang === 'ar' ? 'EN' : 'العربیه'}
                    </Link>
                    <button className="rounded-full border border-black/10 px-10 py-3 text-sm font-bold">
                        {dict.careers}
                    </button>
                </div>
            </div>
        </header>
    );
}
