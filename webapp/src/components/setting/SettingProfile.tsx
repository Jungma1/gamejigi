import React from 'react';
import styled, { css } from 'styled-components';
import useAuth from '../../hooks/useAuth';
import useToggle from '../../lib/hooks/useToggle';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
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
            <Button color='green'>블로그 이동</Button>
            <Button color='gray'>쪽지</Button>
          </div>
        </div>
        <div className='image'>
          <img src='img/profile.jpg' alt='profile' />
        </div>
      </TopBlock>
      <BottomBlock edit={edit}>
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

      button:nth-child(1) {
        margin-right: 1rem;
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

const BottomBlock = styled.section<{ edit: boolean }>`
  ${(props) =>
    props.edit &&
    css`
      display: none;
    `}

  font-weight: bold;
  margin-top: 3rem;
  height: 8rem;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    background: ${palette.gray8};
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
      background: ${palette.gray7};
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

export default SettingProfile;
