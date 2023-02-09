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
}
