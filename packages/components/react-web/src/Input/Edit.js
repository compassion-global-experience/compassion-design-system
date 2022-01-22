import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import CheckIcon from '../Icon/icons/Check';
import ClearIcon from '../Icon/icons/X';
import EditIcon from '../Icon/icons/Edit';

const Edit = ({ id, disable, value, setDisabledMode, onTextChange }) => {
  const [initialValue, setInitialValue] = useState(value);
  const startEditing = useCallback(() => {
    setInitialValue(value);
    setDisabledMode(false);
  }, [setDisabledMode, value]);

  const completeEditing = useCallback(() => {
    setDisabledMode(true);
  }, [setDisabledMode]);

  const discardEdits = useCallback(() => {
    setDisabledMode(true);
    onTextChange({ target: { value: initialValue } });
  }, [initialValue, onTextChange, setDisabledMode]);

  return (
    <>
      {!disable && (
        <button type="button" aria-controls={id} onClick={completeEditing}>
          <CheckIcon width="30" height="30" />
        </button>
      )}
      {disable && (
        <button type="button" aria-controls={id} onClick={startEditing}>
          <EditIcon width="24" height="24" />
        </button>
      )}
      {!disable && (
        <button
          type="button"
          aria-controls={id}
          className="clear"
          onClick={discardEdits}
        >
          <ClearIcon width="30" height="30" />
        </button>
      )}
    </>
  );
};

Edit.propTypes = {
  id: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  setDisabledMode: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default Edit;
