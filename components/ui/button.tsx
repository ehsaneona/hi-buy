import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/libs/utils';

const buttonVariants = cva(
    'inline-flex items-center justify-center gap-1.5 font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default: 'bg-white text-black border border-black/5 shadow-[0px_0px_0px_1px_#E1E6EC,_0px_3px_6px_0px_rgba(0,_0,_0,_0.07),_0px_-5px_1px_-1px_rgba(0,_0,_0,_0.03)_inset]',
            },
            size: {
                default: 'h-12 px-16 text-sm',
            },
            rounded: {
                default: 'rounded-full',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            rounded: 'default',
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button';
        return (
            <Comp
                className={cn(
                    buttonVariants({ variant, size, rounded, className })
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
