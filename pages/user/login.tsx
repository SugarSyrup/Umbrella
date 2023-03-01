import { FieldValues, SubmitHandler } from 'react-hook-form/dist/types';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

import styles from '@/styles/pages/login.module.scss';

export default function Home() {
  const JWT_EXPIRY_TIME = 1 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)

  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  
  const onSilentRefresh = (data:{username:string, password:string}) => {
    axios.post(`http://${window.location.host}/api/auth/silent-refresh`, data)
      .then(onLoginSuccess)
      .catch(onError);
  }
  
  const onLoginSuccess = (response : AxiosResponse) => {
    const { accessToken } = response.data;
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME);
  }

  const onError = (error: Error|AxiosError) => {
    console.log(error);
  }

  const onSubmit:SubmitHandler<FieldValues> = ({username, password}) => {
    axios.post(`http://${window.location.host}/api/auth/login`, {username, password})
      .then(onLoginSuccess)
      .catch(onError);
  }

  return (
    <div className={styles.mainContainer}>
      <main className={styles.loginContainer}>
        <div className={styles.textContainer}>
            <span className={styles.heading}>Log in</span>
            <span className={styles.smallTxt}>New to Umbrella? <a href="/user/join">Create an new account</a></span>
        </div>
        {/*  */}
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