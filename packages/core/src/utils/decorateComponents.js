const wrappingElementClass = 'cds-storybook__story__wrap';
const wrappingElementComment = document.createComment(
  ' The wrapping element is only used for Storybook layout and can be removed from your code. ',
);

export default (
  componentArray,
  decoratorClass = wrappingElementClass,
  decoratorComment = wrappingElementComment,
) => {
  const decoratorDiv = document.createElement('div');
  decoratorDiv.classList.add(decoratorClass);
  decoratorDiv.appendChild(decoratorComment);

  componentArray.forEach((component) => {
    decoratorDiv.appendChild(component);
  });

  return decoratorDiv;
};
