import { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { Meta } from '@storybook/react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import Button from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  args: {
    title: 'Title',
    footerSlot: (
      <>
        <Button label="Button 2" mode="secondary" />
        <Button label="Button 1" mode="primary" />
      </>
    ),
  },
  decorators: [
    (Story, context) => (
      <div style={{ height: '25vh', width: '100%' }}>
        <OpenModalButton initialOpen={context.viewMode !== 'docs'}>
          {(isOpen, update) =>
            isOpen && (
              <Story args={{ onClose: () => update(false), ...context.args }} />
            )
          }
        </OpenModalButton>
      </div>
    ),
  ],
  render: (args) => (
    <Modal {...args}>
      <div
        style={{
          border: '3px dashed',
          textAlign: 'center',
          borderRadius: 4,
          margin: 10,
          padding: 10,
        }}
      >
        Slot
      </div>
    </Modal>
  ),
};

export default meta;

const OpenModalButton = (props: {
  initialOpen?: boolean;
  children: (
    isOpen: boolean,
    update: Dispatch<SetStateAction<boolean>>,
  ) => ReactNode | undefined;
}) => {
  const [open, setOpen] = useState(props.initialOpen || false);

  return (
    <>
      {open && <Backdrop />}
      <Button
        size="medium"
        mode="secondary"
        label="Open Modal"
        onClick={() => setOpen(true)}
      />
      {props.children(open, setOpen)}
    </>
  );
};

export const Default = {
  args: {
    size: 'default',
  },
};

export const Small = {
  args: {
    size: 'small',
  },
};

export const Wide = {
  args: {
    size: 'wide',
  },
};

export const NoHeader = {
  args: {
    title: undefined,
  },
};

export const NoFooter = {
  args: {
    footerSlot: undefined,
  },
};

export const NoHeaderAndFooter = {
  args: {
    title: undefined,
    footerSlot: undefined,
  },
};
