export type anyObject = Record<string, unknown>;
export type ObjectString = Record<string, string>;

export type TupleUnion<U extends string, R extends any[] = []> = {
	[S in U]: Exclude<U, S> extends never
		? [...R, S]
		: TupleUnion<Exclude<U, S>, [...R, S]>;
}[U];
