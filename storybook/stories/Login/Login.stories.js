import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import CenterView from '../CenterView';
import Login from ".";
import { themes } from '@storybook/theming';
import { NavigationDecorator } from '../../../src/container/AppContainer';

storiesOf('Login', module)
    .addParameters({
        options: {
            theme: themes.dark
        }
    })
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .addDecorator((getStory) => <NavigationDecorator story={getStory} routeName={'Login'} />)
    .add('Only Header', () => (
        <Login
            // title={'Welcome to TravelRite!'}
            title={text('Login Title', 'Welcome to TravelRite!')}
            description={text("Login Description", 'This app suggests most carbon efficient modes and route.')}
            onPressSignIn={action("SignIn")}
            emailTitle={text("Email Title", "Email Id")}
            emailPlaceholder={text("Email Placeholder", "Enter email")}
            passwordTitle={text("Password Title", "Password")}
            passwordPlaceholder={text("Password Placeholder", "Enter password")}
        />
    ))
    .add('Show Forgot Password', () => (
        <Login
            title={text('Login Title', 'Welcome to TravelRite!')}
            description={text("Login Description", 'This app suggests most carbon efficient modes and route.')}
            showForgotPassword
            emailTitle={text("Email Title", "Email Id")}
            emailPlaceholder={text("Email Placeholder", "Enter email")}
            passwordTitle={text("Password Title", "Password")}
            passwordPlaceholder={text("Password Placeholder", "Enter password")}
        />
    ))
    .add('With Social Login', () => (
        <Login
            title={text('Login Title', 'Welcome to TravelRite!')}
            description={text("Login Description", 'This app suggests most carbon efficient modes and route.')}
            withSocialLogin
            onPressApple={action("Apple Login")}
            onPressFacebook={action("FB Login")}
            onPressGoogle={action("Google Login")}
            emailTitle={text("Email Title", "Email Id")}
            emailPlaceholder={text("Email Placeholder", "Enter email")}
            passwordTitle={text("Password Title", "Password")}
            passwordPlaceholder={text("Password Placeholder", "Enter password")}
        />
    ))