import { AriaListBoxOptions } from 'react-aria';
import { ListState } from 'react-stately';

export * from './ListBoxBase';

export interface ListBoxBaseProps<T> extends AriaListBoxOptions<T> {
	state: ListState<T>;
}
