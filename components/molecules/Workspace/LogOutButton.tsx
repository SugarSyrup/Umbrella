import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setIsLogin } from '@/store/userSlice';

export function LogOutButton() {
    const dispatch = useDispatch();
    return(
        <StyledLogout onClick={() => {
            dispatch(setIsLogin({isLoggedin : false, nickname : ""}));
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