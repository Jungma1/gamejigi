import React from 'react';
import styled from 'styled-components';

interface MainTemplateProps {
  children: React.ReactNode;
}

function MainTemplate({ children }: MainTemplateProps) {
  return <Block>{children}</Block>;
}

const Block = styled.div`
  display: flex;
`;

export default MainTemplate;
