import '../src/components/button.css';

export const createButton = ({
  mode = 'secondary',
  size = 'medium',
  disabled = false,
  label,
  onClick,
}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  btn.className = ['button-main', mode, size].join(' ');
  btn.disabled = disabled;

  return btn;
};
