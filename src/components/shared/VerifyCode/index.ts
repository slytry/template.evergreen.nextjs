export * from './VerifyCode';

export interface VerifyCodeProps {
	length: number;
	onComplete?: () => void;
	className?: string;
	url?: string;
	buttonText?: string;
}
