import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faHome, faBullhorn, faCalendar, faFile } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectWorkspaceState } from '@/store/workspaceSlice';

export function SideNavigator() {
    const {data : {boards, events}} = useSelector(selectWorkspaceState);
    return(
        <StyledWrapper>
            <span>
                <FontAwesomeIcon icon={faHome} />
                Home
            </span>
            <span>
                <FontAwesomeIcon icon={faBullhorn} />
                Announcement
            </span>
            <span>
                <FontAwesomeIcon icon={faMessage} />
                Message
            </span>
            <span>
                <FontAwesomeIcon icon={faFile} />
                게시판
            </span>
            <span>
                <FontAwesomeIcon icon={faCalendar} />
                스케줄
            </span>
            
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;

    width:70%;
    height:200px;

    margin-top:100px;

    font-size:24px;

    padding-left:30px;

    svg{
        margin-right:20px;
    }
`