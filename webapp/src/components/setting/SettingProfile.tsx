import React from 'react';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';
import useToggle from '../../lib/hooks/useToggle';
import palette from '../../lib/styles/palette';
import SettingSocialButton from './SettingSocialButton';

function SettingProfile() {
  const { user } = useAuth();
  const [edit, onToggle] = useToggle(false);

  return (
    <>
      <TopBlock>
        <div className='title'>
          <div className='name'>{user?.username}</div>
          <div className='buttons'>
            <button onClick={() => onToggle()}>정보 수정하기</button>
            <button>쪽지</button>
          </div>
        </div>
        <div className='image'>
          <img src='img/profile.jpg' alt='profile' />
        </div>
      </TopBlock>
      <BottomBlock>
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
      </BottomBlock>
    </>
  );
}

const TopBlock = styled.section`
  display: flex;
  height: 8rem;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;

    .name {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .buttons {
      display: flex;

      button {
        font-size: 1rem;
        font-weight: bold;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        border-radius: 3px;
        cursor: pointer;

        :nth-child(1) {
          margin-right: 1rem;
          background: ${palette.green700};
          padding-left: 1.5rem;
          padding-right: 1.5rem;

          :hover {
            background: ${palette.green800};
          }
        }
        :nth-child(2) {
          background: ${palette.gray700};
          padding-left: 1.25rem;
          padding-right: 1.25rem;

          :hover {
            background: ${palette.gray600};
          }
        }
      }
    }
  }

  .image {
    img {
      display: block;
      border-radius: 50%;
      width: 8rem;
      height: 8rem;
      object-fit: cover;
    }
  }
`;

const BottomBlock = styled.section`
  font-weight: bold;
  margin-top: 3rem;
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
`;

export default SettingProfile;
