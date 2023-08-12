import { StoryFn, Meta } from "@storybook/react";
import Text from "./Text";

export default {
  title: "Components/atoms/Text", // Here, "Components/atoms/Text" is the path in the Storybook sidebar.
  component: Text, // Linking the story to the actual Text component.
} as Meta;

const Template: StoryFn = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  as: "p",
  color: "tomato",
  children: "A simple text component.",
};
