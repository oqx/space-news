import { FC } from "react";

type Hex = string;

type Props = {
  size: number;
  color: Hex;
};

export const SearchIcon: FC<Props> = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
    width={size}
    height={size}
  >
    <g style={{ strokeWidth: 2, stroke: color, fill: "none" }}>
      <path d="M11.29 11.71l-4-4" />
      <circle cx="5" cy="5" r="4" />
    </g>
  </svg>
);
