'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { createClient } from '@supabase/supabase-js';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { useState } from 'react';
import Spinner from '@/components/spinner';
import { toast } from 'sonner';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ContactPage({ dict, lang }) {
    const formSchema = z.object({
        name: z.string({
            required_error: dict.emptyName,
        }),
        email: z
            .string({
                required_error: dict.emptyEmail,
            })
            .email({
                message: dict.notValidEmail,
            }),
        phone: z.number({
            required_error: dict.emptyPhone,
        }),
        message: z.string({
            required_error: dict.emptyMessage,
        }),
    });
    type FormValues = z.infer<typeof formSchema>;
    const defaultValues: Partial<FormValues> = {};
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    const onSubmit = async (contact: FormValues) => {
        setIsLoading(true);
        try {
            await supabase.from('contact').insert([contact]).select();
            toast.success(dict.submitted);
            setTimeout(() => {
                location.reload();
            }, 500);
        } catch (e) {
            toast.success(JSON.stringify(e));
        }
        setIsLoading(false);
    };

    return (
        <main className="flex h-full flex-col items-center gap-2.5 pb-10 pt-12">
            <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
                <div className="mb-4 w-fit rounded-full bg-gray px-6 py-1.5 text-sm">
                    {dict.becomeOurPartner}
                </div>
                <h1 className="text-[44px] font-semibold leading-normal">
                    {dict.weAreOpenForAnyFeedback}
                </h1>
                <h3 className="mt-6">{dict.contactText}</h3>
            </div>
            <div className="mx-auto w-full max-w-md">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="mt-5 flex w-full flex-col items-center gap-5"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input
                                            className="w-full"
                                            placeholder={dict.fullName}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input
                                            className="w-full"
                                            placeholder={dict.email}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input
                                            className="w-full"
                                            placeholder={dict.phoneNumber}
                                            type="number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Textarea
                                            className="w-full"
                                            placeholder={dict.yourMessage}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="border-secondary">
                            {isLoading ? (
                                <Spinner height={20} width={20} color="black" />
                            ) : (
                                dict.send
                            )}
                        </Button>
                    </form>
                </Form>
            </div>
        </main>
    );
}
