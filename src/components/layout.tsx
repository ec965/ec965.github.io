import styled from "styled-components";

interface FlexProps {
  justify?: string;
  align?: string;
}
const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  flex-wrap: "wrap";
`;

export const Col = styled(Flex)`
  flex-direction: "column";
`;
export const Row = styled(Flex)`
  flex-direction: "row
`;

export const Page = styled.div`
  padding-left: ${(props) => props.theme.lrPadding}
  padding-right: ${(props) => props.theme.lrPadding}
`;
