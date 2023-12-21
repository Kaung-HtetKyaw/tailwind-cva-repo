import { VariantProps, cva } from 'class-variance-authority';
import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';
import { cn } from './utils';
import { ComponentProps } from './types';

const containerStyles = cva(
	['sm:my-8 w-full sm:max-w-lg mx-auto sm:rounded-xl shadow-sm  p-6'],
	{
		variants: {
			variant: {
				paper: 'bg-white dark:bg-gray-800',
				default: 'bg-gray-100 dark:bg-gray-900',
			},
			fluid: {
				true: 'sm:max-w-full',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

export interface ContainerProps
	extends VariantProps<typeof containerStyles>,
		ComponentProps {
	children: ReactNode;
}

export function Container(props: ContainerProps) {
	const { children, variant, className } = props;

	return (
		<>
			<div className={cn(containerStyles({ variant, ...props }), className)}>
				{children}
			</div>
		</>
	);
}
