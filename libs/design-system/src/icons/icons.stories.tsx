import React from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { Icon, ICON_MAP, IconProps } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Icons",
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Catalog: Story = {
  render: (props: IconProps) => (
    <div className="flex gap-4">
      {Object.keys(ICON_MAP).map((iconName) => (
        <div key={iconName} className="flex flex-col items-center gap-2">
          <Icon {...props} name={iconName as keyof typeof ICON_MAP} />
        </div>
      ))}
    </div>
  ),
};
