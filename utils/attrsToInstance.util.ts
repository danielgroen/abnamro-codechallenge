import { getCurrentInstance } from 'vue';

export default function attrsToInstance() {
  const instance = getCurrentInstance();

  const _AvailableAttrs = Object.keys(instance?.attrs ?? {});

  /**
   * Headings
   */
  const _defaultHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const headings = ((possibleHeadings = _defaultHeadings) => _AvailableAttrs.filter(heading => possibleHeadings.includes(heading)))()[0];

  /**
   * Colors
   */
  const _defaultColors = ['primary-color', 'secondary-color', 'tertiary-color', 'black', 'white', 'gray'];
  const colors = ((possibleColors = _defaultColors) => _AvailableAttrs.filter(color => possibleColors.includes(color)))()[0];

  /**
   * Text
   */
  const _defaultText = ['p', 'span', 'article', 'aside'];
  const text = ((possibleText = _defaultText) => _AvailableAttrs.filter(text => possibleText.includes(text)))()[0];


  return {
    headings,
    text,
    colors
  };
};
