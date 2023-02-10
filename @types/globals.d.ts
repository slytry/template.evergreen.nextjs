import { AxiosError } from 'axios';

export {};

declare global {
	interface ResponseErrors<ErrorFields = {}> {
		success: boolean;
		message: string;
		errors: ErrorFields;
	}

	interface GenericError<ErrorFields = {}>
		extends AxiosError<ResponseError<ErrorFields>> {}

	interface CNProp {
		className?: string;
	}

	interface I18nNamespaces {
		common: typeof common;
		footer: typeof footer;
		second: typeof secondPage;
		'404': typeof errorPage;
	}
}
