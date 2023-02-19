import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { ButtonStyle, ButtonStyleProps } from './ButtonStyle';

export type ButtonProps = ButtonStyleProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, isLoading, disabled, ...buttonProps }) => {
	return (
		<button {...buttonProps} disabled={disabled || isLoading}>
			<ButtonStyle isLoading={isLoading}>{children}</ButtonStyle>
		</button>
	);
};

Button.defaultProps = {
	type: 'button',
};

export { Button };
