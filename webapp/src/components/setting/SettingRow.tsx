import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

interface SettingRowProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function SettingRow({ children, title, description }: SettingRowProps) {
  return (
    <Block>
      <h3>{title}</h3>
      {children}
      <span className='description'>{description}</span>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.125rem;
  }

  .description {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: ${palette.gray3};
  }
`;

export default SettingRow;
