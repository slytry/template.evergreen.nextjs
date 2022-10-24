import cnBind from 'classnames/bind';
import { ReactElement } from 'react';

import { BlogData } from './Blog.data';
import ArrowSvg from './assets/icons/arrow.svg';
import ClockSvg from './assets/icons/clock.svg';
import LayerSvg from './assets/icons/layers.svg';
import PlayBtn from './assets/icons/palyBtn.svg';

import styles from './Blog.module.scss';

const cx = cnBind.bind(styles);

const Blog = (): ReactElement => (
	<section className={cx('Blog')}>
		<div className={cx('Blog__container')}>
			<div className={cx('Blog__articles')}>
				<div className={cx('Blog__heading-bar')}>
					<h2 className={cx('Blog__article-heading')}>База нескучных знаний</h2>
					<div className={cx('Blog__show-more')}>
						<span className={cx('Blog__show-more-text')}>Смотреть все</span>
						<ArrowSvg alt="Стрелка в право" />
					</div>
				</div>
				<div className={cx('Blog__articles-container')}>
					{BlogData.articles.map((item) => (
						<div className={cx('Blog__article-item')} key={item.id}>
							<img
								src={item.image}
								alt={item.alt}
								className={cx('Blog__article-image')}
							/>
							<p className={cx('Blog__article-text')}>{item.title}</p>
							<ClockSvg className={cx('Blog__article-icon')} />
							<span className={cx('Blog__article-time')}>{item.readingTime}</span>
							<LayerSvg className={cx('Blog__article-icon')} />
							<span className={cx('Blog__article-type')}>{item.type}</span>
						</div>
					))}
				</div>
			</div>
			<div className={cx('Blog__tutorials')}>
				<h2 className={cx('Blog__tutorial-heading')}>Мастер-классы</h2>
				{BlogData.tutorials.map((item) => (
					<div className={cx('Blog__tutorial-item')} key={item.id}>
						<p className={cx('Blog__tutorial-text')}>{item.title}</p>
						<div className={cx('Blog__duration')}>
							{item.hasPlayBtn ? <PlayBtn className={cx('Blog__play-btn')} /> : null}
							<span className={cx('Blog__duration-text')}>
								Длительность: {item.duration}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export { Blog };
