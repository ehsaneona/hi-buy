'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createClient } from '@supabase/supabase-js';
import { Label } from '@/components/ui/label';
import { cn } from '@/libs/utils';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import CreatableSelect from 'react-select/creatable';
import { toast } from 'sonner';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

interface Option {
    readonly label: string;
    readonly value: string;
}

export default function PartnersPage({ dict, lang }) {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({});
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState<readonly Option[]>([]);
    const formSchema1 = z.object({
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
    type FormValues1 = z.infer<typeof formSchema1>;
    const defaultValues1: Partial<FormValues1> = {};
    const form1 = useForm<FormValues1>({
        resolver: zodResolver(formSchema1),
        defaultValues: defaultValues1,
    });
    const formSchema2 = z.object({
        country: z.string({
            required_error: dict.emptyCountry,
        }),
        street: z.string({
            required_error: dict.emptyStreet,
        }),
        state: z.string({
            required_error: dict.emptyState,
        }),
        zip: z.number({
            required_error: dict.emptyZip,
        }),
    });
    type FormValues2 = z.infer<typeof formSchema2>;
    const defaultValues2: Partial<FormValues2> = {};
    const form2 = useForm<FormValues2>({
        resolver: zodResolver(formSchema2),
        defaultValues: defaultValues2,
    });

    const onSubmit1 = async (data: FormValues1) => {
        setFormData(data);
        setStep(2);
    };
    const onSubmit2 = async (data: FormValues2) => {
        setFormData((prevState) => ({ ...prevState, ...data }));
        setStep(3);
    };
    const createOption = (label: string) => ({
        label,
        value: label,
    });
    const handleKeyDown = (event) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };

    return (
        <main className="flex h-full flex-col items-center gap-2.5 pb-10 pt-12">
            <div
                className={cn('mx-auto w-full max-w-md', {
                    hidden: step !== 1,
                })}
            >
                <div className="mx-auto flex max-w-2xl flex-col items-center justify-center text-center">
                    <div className="mb-4 w-fit rounded-full bg-gray px-6 py-1.5 text-sm">
                        {dict.partnersSlide1Badge}
                    </div>
                    <h1 className="text-[44px] font-semibold leading-normal">
                        {dict.partnersSlide1Badge}
                    </h1>
                    <h3 className="mt-6">{dict.partnersSlide1H3}</h3>
                </div>
                <Form {...form1}>
                    <form
                        onSubmit={form1.handleSubmit(onSubmit1)}
                        className="mt-5 flex w-full flex-col items-center gap-5"
                    >
                        <FormField
                            control={form1.control}
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
                            control={form1.control}
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
                            control={form1.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input
                                            className="w-full"
                                            placeholder={dict.phoneNumber}
                                            type="number"
                                            {...field}
                                            onChange={(event) =>
                                                field.onChange(
                                                    +event.target.value
                                                )
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form1.control}
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
                            {dict.next}
                        </Button>
                    </form>
                </Form>
            </div>
            <div
                className={cn('mx-auto w-full max-w-md', {
                    hidden: step !== 2,
                })}
            >
                <div className="mb-2 flex items-center justify-center gap-0.5">
                    <div
                        className={cn(
                            'h-1 rounded-full',
                            step !== 1 ? 'w-3 bg-gray' : 'w-16 bg-black'
                        )}
                    ></div>
                    <div
                        className={cn(
                            'h-1 rounded-full',
                            step !== 2 ? 'w-3 bg-gray' : 'w-16 bg-black'
                        )}
                    ></div>
                    <div
                        className={cn(
                            'h-1 rounded-full',
                            step !== 3 ? 'w-3 bg-gray' : 'w-16 bg-black'
                        )}
                    ></div>
                    <div
                        className={cn(
                            'h-1 rounded-full',
                            step !== 4 ? 'w-3 bg-gray' : 'w-16 bg-black'
                        )}
                    ></div>
                </div>
                <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center justify-center text-center">
                    <h1 className="text-[44px] font-semibold leading-normal">
                        {dict.partnersSlide2Address}
                    </h1>
                </div>
                <Form {...form2}>
                    <form
                        onSubmit={form2.handleSubmit(onSubmit2)}
                        className="mt-5 flex w-full flex-col items-center gap-5"
                    >
                        <FormField
                            control={form2.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input
                                            className="w-full"
                                            placeholder={dict.country}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form2.control}
                            name="street"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input
                                            className="w-full"
                                            placeholder={dict.street}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex w-full items-center gap-4">
                            <FormField
                                control={form2.control}
                                name="state"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <Input
                                                className="w-full"
                                                placeholder={dict.state}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form2.control}
                                name="zip"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormControl>
                                            <Input
                                                className="w-full"
                                                placeholder={dict.zip}
                                                type="number"
                                                {...field}
                                                onChange={(event) =>
                                                    field.onChange(
                                                        +event.target.value
                                                    )
                                                }
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="mt-6 flex w-full items-center justify-between">
                            <Button onClick={() => setStep(1)}>
                                {dict.back}
                            </Button>
                            <Button type="submit" className="border-secondary">
                                {dict.next}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
            <div
                className={cn('mx-auto w-full max-w-5xl', {
                    hidden: step !== 3,
                })}
            >
                <div className="mb-2 flex items-center justify-center gap-0.5">
                    <div
                        className={cn(
                            'h-1 rounded-full',
                            step !== 1 ? 'w-3 bg-gray' : 'w-16 bg-black'
                        )}
                    ></div>
                    <div
                        className={cn(
                            'h-1 rounded-full',
                            step !== 2 ? 'w-3 bg-gray' : 'w-16 bg-black'
                        )}
                    ></div>
                    <div
                        className={cn(
                            'h-1 rounded-full',
                            step !== 3 ? 'w-3 bg-gray' : 'w-16 bg-black'
                        )}
                    ></div>
                    <div
                        className={cn(
                            'h-1 rounded-full',
                            step !== 4 ? 'w-3 bg-gray' : 'w-16 bg-black'
                        )}
                    ></div>
                </div>
                <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center justify-center text-center">
                    <h1 className="text-[44px] font-semibold leading-normal">
                        {dict.partnersSlide3Documentation}
                    </h1>
                </div>
                <div className="grid w-full grid-cols-2 gap-8">
                    <div className="relative flex flex-col gap-6 rounded-lg border border-black/5 p-3 pt-6">
                        <h3 className="text-xl font-medium">
                            {dict.partnersSponsor}
                        </h3>
                        <Label
                            className="flex h-36 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-[#f8f9fb]"
                            htmlFor="sponsor"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="38"
                                height="39"
                                fill="none"
                                viewBox="0 0 38 39"
                            >
                                <g
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2.375"
                                    clipPath="url(#clip0_222_530)"
                                >
                                    <path d="M19 6.47v18.192"></path>
                                    <path
                                        strokeLinejoin="round"
                                        d="M13.838 19.5L19 24.662 24.16 19.5"
                                    ></path>
                                    <path d="M4.354 24.377l1.821 4.56c.792 1.963 3.167 3.578 5.289 3.578h15.073c2.122 0 4.497-1.615 5.288-3.578l1.821-4.56"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_222_530">
                                        <path
                                            fill="#fff"
                                            d="M0 0H38V38H0z"
                                            transform="translate(0 .5)"
                                        ></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>{dict.drag}</span>
                        </Label>
                        <Input
                            className="invisible absolute"
                            id="sponsor"
                            type="file"
                        />
                    </div>
                    <div className="relative flex flex-col gap-6 rounded-lg border border-black/5 p-3 pt-6">
                        <h3 className="text-xl font-medium">
                            {dict.partnersRenewed}
                        </h3>
                        <Label
                            className="flex h-36 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-[#f8f9fb]"
                            htmlFor="membership"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="38"
                                height="39"
                                fill="none"
                                viewBox="0 0 38 39"
                            >
                                <g
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2.375"
                                    clipPath="url(#clip0_222_530)"
                                >
                                    <path d="M19 6.47v18.192"></path>
                                    <path
                                        strokeLinejoin="round"
                                        d="M13.838 19.5L19 24.662 24.16 19.5"
                                    ></path>
                                    <path d="M4.354 24.377l1.821 4.56c.792 1.963 3.167 3.578 5.289 3.578h15.073c2.122 0 4.497-1.615 5.288-3.578l1.821-4.56"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_222_530">
                                        <path
                                            fill="#fff"
                                            d="M0 0H38V38H0z"
                                            transform="translate(0 .5)"
                                        ></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>{dict.drag}</span>
                        </Label>
                        <Input
                            className="invisible absolute"
                            id="membership"
                            type="file"
                        />
                    </div>
                    <div className="relative flex flex-col gap-6 rounded-lg border border-black/5 p-3 pt-6">
                        <h3 className="text-xl font-medium">
                            {dict.partnersCommercial}
                        </h3>
                        <Label
                            className="flex h-36 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-[#f8f9fb]"
                            htmlFor="registration"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="38"
                                height="39"
                                fill="none"
                                viewBox="0 0 38 39"
                            >
                                <g
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2.375"
                                    clipPath="url(#clip0_222_530)"
                                >
                                    <path d="M19 6.47v18.192"></path>
                                    <path
                                        strokeLinejoin="round"
                                        d="M13.838 19.5L19 24.662 24.16 19.5"
                                    ></path>
                                    <path d="M4.354 24.377l1.821 4.56c.792 1.963 3.167 3.578 5.289 3.578h15.073c2.122 0 4.497-1.615 5.288-3.578l1.821-4.56"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_222_530">
                                        <path
                                            fill="#fff"
                                            d="M0 0H38V38H0z"
                                            transform="translate(0 .5)"
                                        ></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>{dict.drag}</span>
                        </Label>
                        <Input
                            className="invisible absolute"
                            id="registration"
                            type="file"
                        />
                    </div>
                    <div className="relative flex flex-col gap-6 rounded-lg border border-black/5 p-3 pt-6">
                        <h3 className="text-xl font-medium">
                            {dict.partnersCopy}
                        </h3>
                        <Label
                            className="flex h-36 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-[#f8f9fb]"
                            htmlFor="nutrition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="38"
                                height="39"
                                fill="none"
                                viewBox="0 0 38 39"
                            >
                                <g
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2.375"
                                    clipPath="url(#clip0_222_530)"
                                >
                                    <path d="M19 6.47v18.192"></path>
                                    <path
                                        strokeLinejoin="round"
                                        d="M13.838 19.5L19 24.662 24.16 19.5"
                                    ></path>
                                    <path d="M4.354 24.377l1.821 4.56c.792 1.963 3.167 3.578 5.289 3.578h15.073c2.122 0 4.497-1.615 5.288-3.578l1.821-4.56"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_222_530">
                                        <path
                                            fill="#fff"
                                            d="M0 0H38V38H0z"
                                            transform="translate(0 .5)"
                                        ></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>{dict.drag}</span>
                        </Label>
                        <Input
                            className="invisible absolute"
                            id="nutrition"
                            type="file"
                        />
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                    <Button onClick={() => setStep(2)}>{dict.back}</Button>
                    <Button
                        onClick={() => setStep(4)}
                        className="border-secondary"
                    >
                        {dict.next}
                    </Button>
                </div>
            </div>
            <div
                className={cn('mx-auto w-full max-w-5xl', {
                    hidden: step !== 4,
                })}
            >
                <div className="mb-2 flex items-center justify-center gap-0.5">
                    <div
                        className={cn(
                            'h-1 rounded-full',
                            step !== 1 ? 'w-3 bg-gray' : 'w-16 bg-black'
                        )}
                    ></div>
                    <div
                        className={cn(
                            'h-1 rounded-full',
                            step !== 2 ? 'w-3 bg-gray' : 'w-16 bg-black'
                        )}
                    ></div>
                    <div
                        className={cn(
                            'h-1 rounded-full',
                            step !== 3 ? 'w-3 bg-gray' : 'w-16 bg-black'
                        )}
                    ></div>
                    <div
                        className={cn(
                            'h-1 rounded-full',
                            step !== 4 ? 'w-3 bg-gray' : 'w-16 bg-black'
                        )}
                    ></div>
                </div>
                <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center justify-center text-center">
                    <h1 className="text-[44px] font-semibold leading-normal">
                        {dict.partnersSlide4Info}
                    </h1>
                </div>
                <div className="grid w-full grid-cols-2 gap-8">
                    <div className="relative flex flex-col gap-6 rounded-lg border border-black/5 p-3 pt-6">
                        <h3 className="text-xl font-medium">
                            {dict.partnersSKU}
                        </h3>
                        <Label
                            className="flex h-36 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-[#f8f9fb]"
                            htmlFor="sponsor"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="38"
                                height="39"
                                fill="none"
                                viewBox="0 0 38 39"
                            >
                                <g
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2.375"
                                    clipPath="url(#clip0_222_530)"
                                >
                                    <path d="M19 6.47v18.192"></path>
                                    <path
                                        strokeLinejoin="round"
                                        d="M13.838 19.5L19 24.662 24.16 19.5"
                                    ></path>
                                    <path d="M4.354 24.377l1.821 4.56c.792 1.963 3.167 3.578 5.289 3.578h15.073c2.122 0 4.497-1.615 5.288-3.578l1.821-4.56"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_222_530">
                                        <path
                                            fill="#fff"
                                            d="M0 0H38V38H0z"
                                            transform="translate(0 .5)"
                                        ></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>{dict.drag}</span>
                        </Label>
                        <Input
                            className="invisible absolute"
                            id="sponsor"
                            type="file"
                        />
                    </div>
                    <div className="relative flex flex-col gap-6 rounded-lg border border-black/5 p-3 pt-6">
                        <h3 className="text-xl font-medium">
                            {dict.partnersSKU}
                        </h3>
                        <Label
                            className="flex h-36 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg bg-[#f8f9fb]"
                            htmlFor="membership"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="38"
                                height="39"
                                fill="none"
                                viewBox="0 0 38 39"
                            >
                                <g
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2.375"
                                    clipPath="url(#clip0_222_530)"
                                >
                                    <path d="M19 6.47v18.192"></path>
                                    <path
                                        strokeLinejoin="round"
                                        d="M13.838 19.5L19 24.662 24.16 19.5"
                                    ></path>
                                    <path d="M4.354 24.377l1.821 4.56c.792 1.963 3.167 3.578 5.289 3.578h15.073c2.122 0 4.497-1.615 5.288-3.578l1.821-4.56"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_222_530">
                                        <path
                                            fill="#fff"
                                            d="M0 0H38V38H0z"
                                            transform="translate(0 .5)"
                                        ></path>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>{dict.drag}</span>
                        </Label>
                        <Input
                            className="invisible absolute"
                            id="membership"
                            type="file"
                        />
                    </div>
                </div>
                <div className="relative mt-8 flex flex-col  rounded-lg border border-black/5 px-6 py-3">
                    <h3 className="text-xl font-medium">
                        {dict.partnersProduct}
                    </h3>
                    <div className="mt-2.5">
                        <CreatableSelect
                            components={{
                                DropdownIndicator: null,
                            }}
                            classNames={{
                                control: () =>
                                    '!border-none !w-fit !outline-none',
                                multiValue: () => '!rounded-full !bg-[#F8F9FB]',
                            }}
                            inputValue={inputValue}
                            isClearable
                            isMulti
                            menuIsOpen={false}
                            onChange={(newValue) => setValue(newValue)}
                            onInputChange={(newValue) =>
                                setInputValue(newValue)
                            }
                            onKeyDown={handleKeyDown}
                            placeholder={dict.partnersTags}
                            value={value}
                        />
                    </div>
                </div>
                <div className="relative mt-8 flex flex-col rounded-lg border border-black/5 px-6 py-3">
                    <h3 className="text-xl font-medium">
                        {dict.partnersPerformance}
                    </h3>
                    <div className="mt-4 font-medium text-black/40">
                        {dict.partnersChannel}
                    </div>
                    <RadioGroup
                        className="mt-2.5 flex items-center"
                        defaultValue="store"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="store" id="r1" />
                            <Label htmlFor="r1">{dict.partnersStore}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="commerce" id="r2" />
                            <Label htmlFor="r2">{dict.partnersCommerce}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="store-commerce" id="r3" />
                            <Label htmlFor="r3">
                                {dict.partnersStoreCommerce}
                            </Label>
                        </div>
                    </RadioGroup>
                </div>
                <div className="mt-6 flex items-center justify-between">
                    <Button onClick={() => setStep(3)}>{dict.back}</Button>
                    <Button
                        className="border-secondary"
                        onClick={() => {
                            toast.success(dict.submitted);
                            setTimeout(() => {
                                location.reload();
                            }, 1000);
                        }}
                    >
                        {dict.finish}
                    </Button>
                </div>
            </div>
        </main>
    );
}
