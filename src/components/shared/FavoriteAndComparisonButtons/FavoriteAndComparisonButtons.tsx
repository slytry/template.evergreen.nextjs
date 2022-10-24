import cn from 'classnames/bind';
import { useToggleState } from 'react-stately';

import { ToggleButton } from '@/base/Buttons';
import { TooltipTrigger } from '@/base/TooltipTrigger';
import { Tooltip } from '@/base/TooltipTrigger/Tooltip';

import CompareSVG from 'public/icons/card/addToComparison.svg';

import styles from './FavoriteAndComparisonButtons.module.scss';

const cx = cn.bind(styles);

export interface FavoriteAndComparisonProps {
	className?: string;
	inFavorite?: boolean;
	inСomparison?: boolean;
}

const FavoriteAndComparisonButtons = ({
	className,
	inFavorite,
	inСomparison,
}: FavoriteAndComparisonProps) => {
	const stateCompare = useToggleState({ defaultSelected: inСomparison });
	const stateFavorite = useToggleState({ defaultSelected: inFavorite });

	return (
		<div className={cx('FavoriteAndComparisonButtons', className)}>
			<TooltipTrigger>
				<ToggleButton state={stateCompare}>
					<CompareSVG />
				</ToggleButton>
				<Tooltip>Добавить в сравнение</Tooltip>
			</TooltipTrigger>
			<TooltipTrigger>
				<ToggleButton state={stateFavorite}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M7.26353 4.56172C5.37466 4.92859 3.92273 6.52506 3.56626 8.62709C3.47673 9.15502 3.47817 10.1086 3.56914 10.5632C3.97011 12.5665 5.40763 14.6456 7.94435 16.8908C8.80223 17.6501 10.5849 19.0126 11.049 19.2637C11.6313 19.5788 12.3687 19.5788 12.951 19.2637C13.4151 19.0126 15.1978 17.6501 16.0556 16.8908C18.5924 14.6456 20.0299 12.5665 20.4309 10.5632C20.5218 10.1086 20.5233 9.15502 20.4337 8.62709C20.0209 6.19244 18.1812 4.5 15.9475 4.5C14.6683 4.5 13.4813 5.06961 12.5042 6.15231C12.3211 6.35512 12.1328 6.57515 12.0857 6.64128L12 6.7615L11.9145 6.64128C11.7168 6.36333 11.0753 5.69926 10.799 5.48661C9.93027 4.81787 9.0191 4.49583 8.01816 4.50375C7.75664 4.50583 7.41706 4.53192 7.26353 4.56172Z"
							fill={stateFavorite.isSelected ? '#DE0735' : 'none'}
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</ToggleButton>
				<Tooltip>Добавить в избранное</Tooltip>
			</TooltipTrigger>
		</div>
	);
};

export { FavoriteAndComparisonButtons };
