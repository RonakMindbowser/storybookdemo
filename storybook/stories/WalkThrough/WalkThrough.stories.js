import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import CenterView from '../CenterView';
import WalkThrough from ".";
import imageconstant from '../../../src/assets/imageconstant';

storiesOf('WalkThrough', module)
    .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
    .add('Screen 1', () => (
        <WalkThrough
            centerImage={imageconstant.walkThroughImage1}
            title={"CO2 Emissions"}
            description={'Carbon dioxide in the atmosphere resulting from burning fossil fuels.'}
            buttonName={'Next'}
        />
    ))
    .add('Screen 2', () => (
        <WalkThrough
            centerImage={imageconstant.walkThroughImage2}
            title={"CO2 Offset"}
            description={'The removal of carbon dioxide as compensation for emissions created.'}
            buttonName={'Next'}
        />
    ))
    .add('Screen 3', () => (
        <WalkThrough
            centerImage={imageconstant.walkThroughImage3}
            title={"CO2 Credits"}
            description={'A certificate or permit that is traded or sold to offset CO2 emissions.'}
            buttonName={'Get Started'}
        />
    ))