import styled from "styled-components";

const FlexContainer = styled.div`
  align-items: ${(props) => props.alignItems};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  > * :not(:last-child) {
    margin-bottom: ${(props) =>
      props.flexDirection === "column" && props.spacing};
    margin-right: ${(props) => props.flexDirection === "row" && props.spacing};
  }
`;

export default FlexContainer;
