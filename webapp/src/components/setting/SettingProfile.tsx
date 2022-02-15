import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth';
import palette from '../../lib/styles/palette';
import SettingSocialButton from './SettingSocialButton';

function SettingProfile() {
  const { user } = useAuth();

  return (
    <Block>
      <ImageBox>
        <img src='img/profile.jpg' alt='profile' />
      </ImageBox>
      <ProfileBox>
        <div className='name'>{user?.username}</div>
        <div className='button'>
          <button>정보 수정하기</button>
          <button>쪽지</button>
        </div>
      </ProfileBox>
      <EtcBox>
        <div className='block'>
          <div className='block-top'>
            <div>no.{user?.no}</div>
            <SettingSocialButton />
          </div>
          <div className='block-bottom'>
            <span>
              {user?.short_word ? user?.short_word : '자기소개를 등록해보세요!'}
            </span>
          </div>
        </div>
      </EtcBox>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  height: 8rem;
  padding-top: 6rem;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
`;

const ImageBox = styled.div`
  padding-right: 2rem;
  border-right: 1px solid ${palette.gray700};

  img {
    display: block;
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
    object-fit: cover;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 3rem;

  .name {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .button {
    display: flex;

    button {
      font-size: 1rem;
      font-weight: bold;

      :nth-child(1) {
        margin-right: 1rem;
        background: ${palette.green700};
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        border-radius: 3px;
        cursor: pointer;

        :hover {
          background: ${palette.green800};
        }
      }
      :nth-child(2) {
        background: ${palette.gray700};
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        border-radius: 3px;
        cursor: pointer;

        :hover {
          background: ${palette.gray600};
        }
      }
    }
  }
`;

const EtcBox = styled.div`
  flex: 1;
  height: 100%;
  padding-left: 2rem;
  border-left: 1px solid ${palette.gray700};

  .block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    background: ${palette.gray900};
    border-radius: 0.625rem;
    padding-left: 2rem;
    padding-right: 2rem;

    .block-top {
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

    .block-bottom {
      background: ${palette.gray800};
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

export default SettingProfile;
