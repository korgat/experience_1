import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ButtonBackground = Template.bind({});
ButtonBackground.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const ButtonBackgroundInverted = Template.bind({});
ButtonBackgroundInverted.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const DefaultButton = Template.bind({});
DefaultButton.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
export const DefaultButtonL = Template.bind({});
DefaultButtonL.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
};
export const DefaultButtonXL = Template.bind({});
DefaultButtonXL.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
};

export const ButtonSquare = Template.bind({});
ButtonSquare.args = {
    children: '!',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
};

export const ButtonSquareL = Template.bind({});
ButtonSquareL.args = {
    children: '!',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const ButtonSquareXL = Template.bind({});
ButtonSquareXL.args = {
    children: '!',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
