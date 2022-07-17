import styled from "styled-components";

export const DrawerWrapper = styled.div`
  padding: 2rem;
  height: 100%;
  overflow-y: auto;
`;

export const DrawerForm = styled.div`
  position: relative;
  height: 100%;

  /* [class~="rs-row"]:last-of-type > .rs-col {
    padding-bottom: 6rem;
  } */
`;

export default {
  DrawerWrapper,
  DrawerForm,
};
