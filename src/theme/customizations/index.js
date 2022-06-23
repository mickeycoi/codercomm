import Card from "./Card.js";
import Tabs from "./Tabs";
import Link from "./Link";

function customizeComponents(theme) {
  return { ...Tabs(theme), ...Card(theme), ...Link(theme) };
}

export default customizeComponents;
