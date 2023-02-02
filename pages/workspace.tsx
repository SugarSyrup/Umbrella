import WorkSpaceLayOut from '@/components/WorkSpace/Layout';
import { ThemeProvider } from 'styled-components';

const mainTheme = {
    primaryColor: "202123",
    secondaryColor : "F3F3F3",
    textColor: "FFFFFF",
}

export default function WorkSpace() {
    return(<ThemeProvider theme={mainTheme}>
        <WorkSpaceLayOut />
    </ThemeProvider>)
}