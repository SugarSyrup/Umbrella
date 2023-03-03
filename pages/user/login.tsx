

import styles from '@/styles/pages/login.module.scss';

import LoginForm from '@/components/molecules/LoginForm';
import { LoginOAuthLinkButtonDiv } from '@/components/molecules/LoginOAuthLinkButtonDiv';
import { CenterTextContour } from '@/components/atoms/CenterTextContour';
import { LoginPageHeader } from '@/components/molecules/LoginPageHeader';

export default function Home() {

  return (
    <div className={styles.mainContainer}>
      <main className={styles.loginContainer}>
        <LoginPageHeader />
        <LoginForm />
        <CenterTextContour content="or" />
        <LoginOAuthLinkButtonDiv />
      </main>
    </div>
  )
}