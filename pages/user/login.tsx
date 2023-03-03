import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

import styles from '@/styles/pages/login.module.scss';

import LoginForm from '@/components/molecules/LoginForm';

export default function Home() {

  return (
    <div className={styles.mainContainer}>
      <main className={styles.loginContainer}>
        <div className={styles.textContainer}>
            <span className={styles.heading}>Log in</span>
            <span className={styles.smallTxt}>New to Umbrella? <a href="/user/signup">Create an new account</a></span>
        </div>
        <LoginForm />
        <span className={styles.hrr}>or</span>
        <div className={styles.icons}>
          <div className={styles.google}>
            <FcGoogle />
          </div>
          <div className={styles.kakao}>
            <RiKakaoTalkFill />
          </div>
          <div className={styles.github}>
            <FaGithub />
          </div>
        </div>
      </main>
    </div>
  )
}