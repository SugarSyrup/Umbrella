import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

export function LogOutButton() {
    return(
        <StyledLogout>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
        </StyledLogout>
    )
}

const StyledLogout = styled.span`
    font-size:24px;
    margin-top:200px;
`;