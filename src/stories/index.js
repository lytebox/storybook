import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button, FullWidthButton } from "../components-shared";

storiesOf("Button", module)
  .add("default", () => <Button>Default button</Button>)
  .add("large", () => <Button large>Large button</Button>)
  .add("inverted", () => <Button invert>Inverted button</Button>)
  .add("inverted outline", () => (
    <Button invert outline>
      Inverted button
    </Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add("full width", () => (
    <FullWidthButton>Full width button!</FullWidthButton>
  ));
