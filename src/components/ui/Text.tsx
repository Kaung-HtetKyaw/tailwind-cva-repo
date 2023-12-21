import { cva, VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import { ComponentProps } from './types';
import { cn } from './utils';

const textVariants = cva(['font-sans'], {
	variants: {
		size: {
			small: 'text-sm',
			medium: 'text-md',
			large: 'text-lg',
		},
		weight: {
			light: 'font-light',
			normal: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},
		align: {
			center: 'text-center',
			left: 'text-left',
			right: 'text-right',
		},
	},
	defaultVariants: {
		size: 'medium',
		weight: 'normal',
		align: 'left',
	},
});

export type TextStyles = VariantProps<typeof textVariants>;

export type TextTypography = `${NonNullable<TextStyles['size']>}/${NonNullable<
	TextStyles['weight']
>}`;

export interface TextProps extends TextStyles, ComponentProps {
	children: ReactNode;
	typography: TextTypography;
}

export function Text(props: TextProps) {
	const { children, className, align, typography } = props;
	const [size, weight] = typography?.split('/') as [
		TextStyles['size'],
		TextStyles['weight'],
	];

	return (
		<div className={cn(textVariants({ size, weight, align }), className)}>
			{children}
		</div>
	);
}
