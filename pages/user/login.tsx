

import styles from '@/styles/pages/login.module.scss';

import LoginForm from '@/components/molecules/LoginForm';
import { LoginOAuthLinkButtonDiv } from '@/components/molecules/LoginOAuthLinkButtonDiv';
import { CenterTextContour } from '@/components/atoms/CenterTextContour';

export default function Home() {

  return (
    <div className={styles.mainContainer}>
      <main className={styles.loginContainer}>
        <div className={styles.textContainer}>
            <span className={styles.heading}>Log in</span>
            <span className={styles.smallTxt}>New to Umbrella? <a href="/user/signup">Create an new account</a></span>
        </div>
        <LoginForm />
        <CenterTextContour content="or" />
        <LoginOAuthLinkButtonDiv />
      </main>
    </div>
  )
}