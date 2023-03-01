import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '@/pages/user/login';

describe('Login Page', () => {
    it('should have a username and a password field, also a submit button', () => {
        render(<Home />);

        const usernameField = screen.getByPlaceholderText(/Email/i);
        const passwordField = screen.getByPlaceholderText(/Password/i);
        const submitButton = screen.getByDisplayValue('Log in');
        
        expect(usernameField).toBeInTheDocument();
        expect(passwordField).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    it('should allow the user to submit their credentials', () => {
        const submit = jest.fn();
        render(<Home submit={submit} />);

        const usernameField = screen.getByPlaceholderText(/Email/i);
        const passwordField = screen.getByPlaceholderText(/Password/i);
        const submitButton = screen.getByDisplayValue('Log in');

        userEvent.type(usernameField, "admin");
        userEvent.type(passwordField, "1q2w3e4r!");
        userEvent.click(submitButton);

        expect(submit).toHaveBeenCalledWith({
            username:"admin",
            password:"1q2w3e4r!",
        });
    })
})