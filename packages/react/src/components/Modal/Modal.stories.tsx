import { useState } from 'react';
import { Meta } from '@storybook/react';
import Modal from './Modal';
import Button from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;

const Template = props => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {
        open &&
          <span style={{ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0, background: 'black', opacity: 0.7 }} />
      }
      <button type="button" className="button-main secondary medium" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      {
          open &&
            <Modal {...props} onClose={() => setOpen(false)}>
              <div style={{ border: '3px dashed', textAlign: 'center', borderRadius: 4, margin: 10, padding: 10 }}>
                Slot
              </div>
            </Modal>
      }
    </>
  );
};

const ModalFooter = () => (
  <>
    <Button label="Button 2" mode="secondary" />
    <Button label="Button 1" mode="primary" />
  </>
);

export const Default = props => <Template {...props} />;
Default.args = {
  title: 'Title',
  size: 'default',
  footerSlot: <ModalFooter />,
};

export const Small = props => <Template {...props} />;
Small.args = {
  title: 'Title',
  size: 'small',
  footerSlot: <ModalFooter />,
};

export const Wide = props => <Template {...props} />;
Wide.args = {
  title: 'Title',
  size: 'wide',
  footerSlot: <ModalFooter />,
};

export const NoHeader = props => <Template {...props} />;
NoHeader.args = {
  footerSlot: <ModalFooter />,
};

export const NoFooter = props => <Template {...props} />;
NoFooter.args = {
  title: 'Title',
};

export const NoHeaderAndFooter = props => <Template {...props} />;
NoHeaderAndFooter.args = {};

