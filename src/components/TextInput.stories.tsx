import { TextInput, TextInputInputProps, TextInputRootProps } from './TextInput'

import { Envelope } from 'phosphor-react'

import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Input',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.InputIcon >
        <Envelope />
      </TextInput.InputIcon>,
      <TextInput.Input placeholder='Type your e-mail' />
    ],

  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder='Type your e-mail' />
  }
}
