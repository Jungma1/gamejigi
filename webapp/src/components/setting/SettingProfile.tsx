import React from 'react';
import styled from 'styled-components';
import useAuth from '../../hooks/useAuth';
import palette from '../../lib/styles/palette';

function SettingProfile() {
  const { user } = useAuth();

  return (
    <Block>
      <section className='profile-title'>
        <div className='name'>{user?.username}</div>
        <div className='buttons'>
          <button>정보 수정하기</button>
          <button>쪽지</button>
        </div>
      </section>
      <section className='profile-image'>
        <img src='img/profile.jpg' alt='profile' />
      </section>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  height: 8rem;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-top: 6rem;

  .profile-title {
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

  .profile-image {
    img {
      display: block;
      border-radius: 50%;
      width: 8rem;
      height: 8rem;
      object-fit: cover;
    }
  }
`;

export default SettingProfile;
