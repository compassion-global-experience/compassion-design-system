import { render } from '@testing-library/react';
import NavItem, { NavItemProps } from './NavItem';

const testProps: NavItemProps = {
  text: 'Hello World',
  href: '#',
  icon: 'house',
  iconDescription: 'Website home',
};

const testSubItems: NavItemProps[] = [
  { text: 'Sub Nav Item 1', href: '#' },
  { text: 'Sub Nav Item 2', href: '#' },
  { text: 'Sub Nav Item 3', href: '#' },
];

describe('NavItem', () => {
  it('should render a single nav item with no subnav button or items', () => {
    const { container } = render(<NavItem {...testProps} />);
    expect(container).toMatchSnapshot();
  });

  it('should render a nav item with subnav closed by default', () => {
    const { container } = render(
      <NavItem {...testProps} subItems={testSubItems} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render a nav item with subnav open', () => {
    const { container } = render(
      <NavItem {...testProps} subItems={testSubItems} openSubNav />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render a contained navitem', () => {
    const { container } = render(
      <NavItem {...testProps} subItems={testSubItems} isContained />,
    );
    expect(container).toMatchSnapshot();
  });
});
