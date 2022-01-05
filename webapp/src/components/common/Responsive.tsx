import styled from 'styled-components';
import media from '../../lib/styles/media';
import palette from '../../lib/styles/palette';

interface ResponsiveProps {
  children: React.ReactNode;
}

function Responsive({ children }: ResponsiveProps) {
  return <ResponsiveTemplate>{children}</ResponsiveTemplate>;
}

export const ResponsiveTemplate = styled.div`
  display: flex;
  align-items: center;
  width: 1440px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background: ${palette.gray1};

  ${media.xlarge} {
    width: 1024px;
  }
  ${media.medium} {
    width: 768px;
  }
  ${media.small} {
    width: 375px;
  }
`;

export default Responsive;
