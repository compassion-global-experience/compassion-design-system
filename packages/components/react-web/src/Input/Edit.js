import React from 'react';
import PropTypes from 'prop-types';

import CheckIcon from '../Icon/icons/Check';
import ClearIcon from '../Icon/icons/X';
import EditIcon from '../Icon/icons/Edit';

const Edit = ({ type, id, disable, changeInputToEnabled, onButtonClick }) => {
  return (
    <>
      {type === 'edit' && !disable && (
        <button type="button" aria-controls={id} onClick={onButtonClick}>
          <CheckIcon width="30" height="30" />
        </button>
      )}
      {disable && (
        <button type="button" aria-controls={id} onClick={changeInputToEnabled}>
          <EditIcon width="24" height="24" />
        </button>
      )}
      <button
        type="button"
        aria-controls={id}
        aria-hidden="true"
        className="clear"
      >
        <ClearIcon width="30" height="30" />
      </button>
    </>
  );
};

Edit.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired,
  changeInputToEnabled: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Edit;
