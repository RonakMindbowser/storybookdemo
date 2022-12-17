import { action } from '@storybook/addon-actions';
import { color, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import CenterView from '../CenterView';
import SignUp from ".";
import { boolean, withKnobs } from '@storybook/addon-knobs';
import Colors from '../../../src/theme/Colors';
import { NavigationDecorator } from '../../../src/container/AppContainer';

storiesOf('SignUp', module)
    .addDecorator((Story) => <CenterView >{
        <Story constant={{
            isStroyBook: true,
            colors: {
                black: "#000000",
                white: "#111111"
            }
        }} />
    }</CenterView>)
    .add('Default View', (data) => {
        console.log("Data :", data);
        return (
            <SignUp
                title={text('SignUp Title', 'Welcome to TravelRite!')}
                description={text('SignUp Description', 'Create your account')}
                showProfilePicOption={boolean("ShowPic", true)}
                uploadPhotoText={text("uploadPhotoText", "Upload Pic")}
                showNameOption={boolean("ShowNameOption", true)}
                firstNamePlaceholder={text("First Name Placeholder", "FirstName")}
                firstNameTitle={text("First Name Title", "FirstName")}
                lastNamePlaceholder={text("Last Name Placeholder", "LastName")}
                lastNameTitle={text("Last Name Title", "LastName")}
                showPhoneInput={boolean("ShowPhoneInput", true)}
                phoneNumberPlaceholder={text("Phone Placeholder", "Enter Phone No")}
                phoneNumberTitle={text("Phone Title", "Phone Number")}
                emailTitle={text("Email Title", "Email Id")}
                emailPlaceholder={text("Email Placeholder", "Enter email")}
                passwordTitle={text("Password Title", "Password")}
                passwordPlaceholder={text("Password Placeholder", "Enter password")}
                showTermsAndCondition={boolean("ShowTermsAndCondition", true)}
                signUpBtnName={text("SignUp Button Name", "Sign Up")}
                onPressSignUp={action("Sign Up")}
                withSocialLogin={boolean("Show Socail Login", true)}
                countryCode={number("CountryCode", 12)}
                layoutColor={color("Layout Color", Colors.white)}
                titleColor={color("Title Color", Colors.black)}
                descriptionColor={color("Description Color", Colors.tab_inactive_color)}
                {...data}
            />
        )
    }
    )

