import React from "react";
import { PlusIcon } from "./assets/Plus";
import { GithubIcon } from "./assets/Github";
import { StarIcon } from "./assets/Star";
import { CaretUpIcon } from "./assets/CaretUp";
import { CaretDownIcon } from "./assets/CaretDown";
import { CaretLeftIcon } from "./assets/CaretLeft";
import { CaretRightIcon } from "./assets/CaretRight";
import { HeartIcon } from "./assets/Heart";

export const ICON_MAP = {
  plus: PlusIcon,
  github: GithubIcon,
  star: StarIcon,
  caretUp: CaretUpIcon,
  caretDown: CaretDownIcon,
  caretLeft: CaretLeftIcon,
  caretRight: CaretRightIcon,
  heart: HeartIcon,
};

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: keyof typeof ICON_MAP;
  color?: string;
  size?: number;
}

export const Icon = ({
  name,
  color,
  width = 24,
  className = "",
  ...rest
}: IconProps) => {
  const IconSvg = ICON_MAP[name];
  if (!IconSvg) return null;

  const defaultColor = "text-gray-500 dark:text-gray-300";
  const colorClass = color ? color : defaultColor;
  console.log({ color, defaultColor, name });

  return (
    <IconSvg
      className={`${colorClass} ${className}`}
      width={width}
      height={width}
      {...rest}
    />
  );
};

export default Icon;
