import React from 'react';
import styled from 'styled-components';
import useSetting from './hooks/useSetting';
import Button from '../common/Button';
import SettingInput from './SettingInput';
import SettingRow from './SettingRow';

function SettingProfile() {
  const { onSubmit, handleSubmit, register, errors, user } = useSetting();

  return (
    <Section>
      <div className='image'>
        <img src={user?.thumbnail} alt='profile' />
      </div>
      <div className='info'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SettingRow
            title='이름'
            description='다른 사용자들에게 보여질 이름을 등록하는 곳입니다.'
          >
            <SettingInput
              type='text'
              {...register('displayName', { required: true })}
              placeholder='이름을 입력하세요.'
              fullWidth
            />
            {errors.displayName && <span>아마도 에러</span>}
          </SettingRow>
          <SettingRow
            title='자기소개'
            description='자신의 한 줄 소개를 등록하는 곳입니다.'
          >
            <SettingInput
              {...register('shortWord')}
              type='text'
              placeholder='자기소개를 입력하세요.'
              fullWidth
            />
          </SettingRow>
          <SettingRow
            title='블로그'
            description='다른 사용자들에게 보여질 블로그 주소를 등록하는 곳입니다.'
          >
            <SettingInput
              {...register('blogUrl')}
              type='text'
              placeholder='블로그 주소를 입력하세요.'
              fullWidth
            />
          </SettingRow>
          <SettingRow
            title='Github'
            description='다른 사용자들에게 보여질 Github 주소를 등록하는 곳입니다.'
          >
            <SettingInput
              {...register('githubUrl')}
              type='text'
              placeholder='Github 주소를 입력하세요.'
              fullWidth
            />
          </SettingRow>
          <div className='button-wrapper'>
            <Button color='green'>프로필 수정</Button>
          </div>
        </form>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;

  .image {
    padding-left: 4rem;
    padding-right: 4rem;
    display: flex;
    flex-direction: column;

    img {
      display: block;
      border-radius: 50%;
      width: 8rem;
      height: 8rem;
      object-fit: cover;
    }
  }

  .info {
    flex: auto;
    box-sizing: border-box;
  }

  .button-wrapper {
    text-align: right;
  }
`;

export default SettingProfile;
