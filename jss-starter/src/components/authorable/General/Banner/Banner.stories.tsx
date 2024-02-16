import defaultData, { rightData, centerData } from './Banner.mock-data';
import Banner, { BannerDataProps } from './Banner';
import type { Meta, StoryObj } from '@storybook/react';
import { expandObj, flattenObj } from 'lib/object-parser';

const meta: Meta<typeof Banner> = {
  title: 'Authorable/General/Banner',
  component: Banner,
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Banner>;

export const Left: Story = {
  render: (args) => {
    return <Banner {...(expandObj({ ...args }) as BannerDataProps)} />;
  },
  args: {
    ...flattenObj(defaultData),
  },
};

export const Right: Story = {
  render: (args) => {
    return <Banner {...(expandObj({ ...args }) as BannerDataProps)} />;
  },
  args: {
    ...flattenObj(rightData),
  },
};

export const Center: Story = {
  render: (args) => {
    return <Banner {...(expandObj({ ...args }) as BannerDataProps)} />;
  },
  args: {
    ...flattenObj(centerData),
  },
};
