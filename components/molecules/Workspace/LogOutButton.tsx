import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userAtom } from '@/atoms/user';

export function LogOutButton() {
    const [user,setUser] = useRecoilState(userAtom);
    return(
        <StyledLogout onClick={() => {
            setUser({isLoggedin : false, nickname : "", email:"", user_id:-1});
        }}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
        </StyledLogout>
    )
}

const StyledLogout = styled.span`
    font-size:24px;
    margin-top:300px;
`;