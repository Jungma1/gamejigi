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
  width: 1440px;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  background: ${palette.gray800};
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  border-right: 2px solid rgba(255, 255, 255, 0.5);

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
