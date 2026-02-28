import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components / Card',
  component: Card,
  args: {
    children: (
      <>
        <h3 className="font-bold mb-2">Card Title</h3>
        <p>This is some card content.</p>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {};

export const Variants: Story = {
  render: (props) => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Card {...props} variant="base">
          <div>
            <h3 className="font-bold mb-2">Base Card</h3>
            <p>This is a base card.</p>
          </div>
        </Card>
        <Card {...props} variant="elevated">
          <div>
            <h3 className="font-bold mb-2">Elevated Card</h3>
            <p>This is an elevated card.</p>
          </div>
        </Card>
      </div>
    </div>
  ),
};

export const Paddings: Story = {
  render: (props) => (
    <div className="flex gap-4">
      <Card {...props} padding="sm">
        <div>
          <h3 className="font-bold mb-2">Small Padding</h3>
          <p>p-2 (8px)</p>
        </div>
      </Card>
      <Card {...props} padding="md">
        <div>
          <h3 className="font-bold mb-2">Medium Padding</h3>
          <p>p-3 (12px)</p>
        </div>
      </Card>
      <Card {...props} padding="lg">
        <div>
          <h3 className="font-bold mb-2">Large Padding</h3>
          <p>p-4 (16px)</p>
        </div>
      </Card>
    </div>
  ),
};
