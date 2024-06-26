'use client';

import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/libs/utils';
import { cva, VariantProps } from 'class-variance-authority';

const switchVariants = cva(
    'focus-visible:ring-ring focus-visible:ring-offset-background peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'data-[state=checked]:bg-neutral-800 data-[state=unchecked]:bg-blue-200',
                light: 'data-[state=checked]:bg-blue-200 data-[state=unchecked]:bg-slate-50',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

const switchThumbVariants = cva(
    'pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
    {
        variants: {
            variant: {
                default: 'bg-white',
                light: 'bg-neutral-800',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

interface SwitchProps
    extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
        VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    SwitchProps
>(({ variant, className, ...props }, ref) => (
    <SwitchPrimitives.Root
        className={cn(switchVariants({ variant }), className)}
        dir="ltr"
        ref={ref}
        {...props}
    >
        <SwitchPrimitives.Thumb
            className={cn(switchThumbVariants({ variant }))}
        />
    </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch, switchVariants, switchThumbVariants };
