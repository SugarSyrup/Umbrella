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

//https://dev-yakuza.posstree.com/ko/react/nextjs/test/
//https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler


// error 해결 1


// Configuration error:
    
// Could not locate module @/pages/user/login mapped as:
// C:\WorkSpace\umbrella\src\$1.

// Please check your configuration for these entries:
// {
//   "moduleNameMapper": {
//     "/@\/(.*)$/": "C:\WorkSpace\umbrella\src\$1"
//   },
//   "resolver": undefined
// }

// https://github.com/vuejs/vue-jest/issues/40


//error 2

//  Test environment jest-enviroment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

// or

// Implicit config resolution does not allow multiple configuration files.
// Either remove unused config files or select one explicitly with `--config`.        


//https://stackoverflow.com/questions/72013449/upgrading-jest-to-v29-error-test-environment-jest-environment-jsdom-cannot-be