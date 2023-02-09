import cx from './index.module.scss';

interface TemplateNameProps {
	className?: string;
}

const TemplateName = ({ className }: TemplateNameProps) => (
	<div className={cx('Root', className)}>New Component</div>
);

export { TemplateName };
