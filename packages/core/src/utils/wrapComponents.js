export const wrappingElementClass = 'cds-storybook__story__wrap';
export const wrappingElementComment =
  'The wrapping element is only used for Storybook layout and can be removed from your code.';

export default (
  componentArray,
  decoratorClass = wrappingElementClass,
  decoratorComment = document.createComment(` ${wrappingElementComment} `),
) => {
  const decoratorDiv = document.createElement('div');
  decoratorDiv.classList.add(decoratorClass);
  decoratorDiv.appendChild(decoratorComment);

  componentArray.forEach((component) => {
    decoratorDiv.appendChild(component);
  });

  return decoratorDiv;
};
