import React from 'react';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';
import palette from '../../lib/styles/palette';
import SettingSocialButton from './SettingSocialButton';

function SettingProfileEtc() {
  const { user } = useAuth();

  return (
    <Block>
      <section className='profile-etc'>
        <div className='box'>
          <div className='no'>
            <div>no.{user?.no}</div>
            <SettingSocialButton />
          </div>
          <div className='short-word'>
            <span>
              {user?.short_word ? user?.short_word : '자기소개를 등록해보세요!'}
            </span>
          </div>
        </div>
      </section>
    </Block>
  );
}

const Block = styled.div`
  font-weight: bold;
  margin-top: 3rem;

  .profile-etc {
    height: 8rem;

    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      background: ${palette.gray900};
      border-radius: 0.625rem;
      padding-left: 2rem;
      padding-right: 2rem;

      .no {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 2rem;

        svg {
          cursor: pointer;
          :nth-child(1) {
            margin-right: 1rem;
          }
        }
      }

      .short-word {
        background: ${palette.gray800};
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  }
`;

export default SettingProfileEtc;
