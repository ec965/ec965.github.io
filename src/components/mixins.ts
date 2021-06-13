import { css } from "styled-components";

export const flexCenterMixin = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const overflowCenterMixin = css`
  overflow: auto;
  &::before,
  &::after {
    content: "";
    flex: 1;
  }
`;

export const barContentMixin = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
