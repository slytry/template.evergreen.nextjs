import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { CatalogBtn } from './CatalogBtn';

export default {
	title: 'UI/Catalog Button',
	component: CatalogBtn,
} as ComponentMeta<typeof CatalogBtn>;

const Template: ComponentStory<typeof CatalogBtn> = (args) => <CatalogBtn {...args} />;

export const Default = Template.bind({});
Default.args = {};
