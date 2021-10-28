import React from 'react';
import PropTypes from 'prop-types';

import CheckIcon from '../Icon/icons/IconCheck';
import ClearIcon from '../Icon/icons/IconX';
import EditIcon from '../Icon/icons/IconEdit';

const Edit = ({
  type,
  inputId,
  disable,
  changeInputToEnabled,
  onButtonClick,
  id,
  ...props
}) => {
  const buttonId = id ?? inputId;

  return (
    <>
      {type === 'edit' && !disable && (
        <button
          type="button"
          aria-controls={buttonId}
          onClick={onButtonClick}
          {...props}
        >
          <CheckIcon width={30} height={30} />
        </button>
      )}
      {disable && (
        <button
          type="button"
          aria-controls={buttonId}
          onClick={changeInputToEnabled}
          {...props}
        >
          <EditIcon width={24} height={24} />
        </button>
      )}
      <button
        type="button"
        aria-controls={buttonId}
        aria-hidden="true"
        className="clear"
        {...props}
      >
        <ClearIcon width={30} height={30} />
      </button>
    </>
  );
};

Edit.propTypes = {
  type: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired,
  changeInputToEnabled: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  id: PropTypes.string,
};

Edit.defaultProps = {
  id: undefined,
};

export default Edit;
