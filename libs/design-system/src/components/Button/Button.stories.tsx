import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
  },
};

export const Variants: Story = {
  render: (props) => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button {...props} variant="filled" />
        <Button {...props} variant="outlined" />
        <Button {...props} variant="bare" />
      </div>
      <div className="flex gap-4">
        <Button {...props} color="secondary" variant="filled" />
        <Button {...props} color="secondary" variant="outlined" />
        <Button {...props} color="secondary" variant="bare" />
      </div>
      <div className="flex gap-4">
        <Button {...props} color="tertiary" variant="filled" />
        <Button {...props} color="tertiary" variant="outlined" />
        <Button {...props} color="tertiary" variant="bare" />
      </div>
    </div>
  ),
};
