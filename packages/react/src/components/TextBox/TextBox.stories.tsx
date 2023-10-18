import { Meta } from '@storybook/react';
import TextBox from './TextBox';
import styles from '@compassion-design-system/core/src/components/TextBox/textBox.module.css';

const meta: Meta<typeof TextBox> = {
  title: 'Components/TextBox',
  component: TextBox,
};

export default meta;

const defaultCardContent = (
  <>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <hr />
    <h1 className={styles['cds-text-box__regularHeading']}>
      Regular heading 1
    </h1>
    <h2 className={styles['cds-text-box__regularHeading']}>
      Regular heading 2
    </h2>
    <h3 className={styles['cds-text-box__regularHeading']}>
      Regular heading 3
    </h3>
    <h4 className={styles['cds-text-box__regularHeading']}>
      Regular heading 4
    </h4>
    <h5 className={styles['cds-text-box__regularHeading']}>
      Regular heading 5
    </h5>
    <h6 className={styles['cds-text-box__regularHeading']}>
      Regular heading 6
    </h6>
    <hr />
    <p>
      Paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      <strong>Bold paragraph</strong>
    </p>
    <p>
      <small>Small paragraph</small>
    </p>
    <hr />
    <ul>
      <li>
        Item 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li>
        Item 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li>
        Item 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
    </ul>

    <ol>
      <li>
        Item 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li>
        Item 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
      <li>
        Item 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </li>
    </ol>

    <blockquote>
      Blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
    </blockquote>
  </>
);

export const Default = {
  args: {
    children: defaultCardContent,
    isMobile: false,
    color: 'default',
  },
};
