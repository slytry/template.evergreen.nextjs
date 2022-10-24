import { ChangeEvent, useState, useEffect, InputHTMLAttributes, KeyboardEventHandler } from 'react';
import { SliderState } from 'react-stately';

import { toNumber } from 'utils/toNumber';

import { clamp } from './RangeSlider.utils';

interface UseOutputInputAria {
	/** Props for the first input(output) element. */
	firstInputProps: InputHTMLAttributes<HTMLInputElement>;
	/** Props for the second input(output) element. */
	secondInputProps: InputHTMLAttributes<HTMLInputElement>;
}

/**
 * Хук возвращает обработчики и `value` для input в которых выводиться информация слайдера
 * Теперь вводить данные можно не только слайдером, но и писать в input
 */
const useOutputInput = (state: SliderState): UseOutputInputAria => {
	const [outputValues, setOutputValues] = useState<number[]>([...state.values]);

	const updateValues = (index: number, newValue: number): void => {
		setOutputValues((prev) => {
			const newValues = [...prev];
			newValues[index] = newValue;
			return newValues;
		});
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const { index } = e.currentTarget.dataset;

		updateValues(+index, toNumber(e.currentTarget.value));
	};

	const handleInputBlur = (e: ChangeEvent<HTMLInputElement>): void => {
		const { index } = e.currentTarget.dataset;
		const newValue = +e.currentTarget.value;
		state.setThumbValue(+index, newValue);
		updateValues(
			+index,
			clamp(newValue, state.getThumbMinValue(+index), state.getThumbMaxValue(+index))
		);
	};

	const handlerInputKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
		const { index } = e.currentTarget.dataset;
		e.stopPropagation();
		if (e.key === 'Enter') {
			const newValue = +e.currentTarget.value;
			state.setThumbValue(+index, newValue);
			updateValues(
				+index,
				clamp(newValue, state.getThumbMinValue(+index), state.getThumbMaxValue(+index))
			);
		}
	};

	/**
	 * Реализация ввода значений в инпут блокировала обновление значений при передвижении самого слайдера
	 * useEffect отслеживает изменения значения слайдера и записывает их в стейт отвечающий за отображение
	 *
	 */
	useEffect(() => {
		setOutputValues(state.values);
	}, [state.values]);

	const firstInputProps = {
		value: outputValues[0],
		onChange: handleInputChange,
		onBlur: handleInputBlur,
		onKeyUp: handlerInputKeyUp,
		'data-index': 0,
	};

	const secondInputProps = {
		value: outputValues[1],
		onChange: handleInputChange,
		onBlur: handleInputBlur,
		onKeyUp: handlerInputKeyUp,
		'data-index': 1,
	};

	return {
		firstInputProps,
		secondInputProps,
	};
};

export { useOutputInput };
