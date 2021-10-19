import React from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import CheckIcon from '../Icon/icons/IconCheck';
import ClearIcon from '../Icon/icons/IconX';
import EditIcon from '../Icon/icons/IconEdit';

const Edit = ({
  type,
  props,
  inputId,
  disable,
  changeInputToEnabled,
  onButtonClick,
}) => {
  return (
    <React.Fragment>
      {type === 'edit' && !disable && (
        <button
          type="button"
          aria-controls={props.id || inputId}
          onClick={onButtonClick}
        >
          <CheckIcon font-size="30px" />
        </button>
      )}
      {disable && (
        <button
          type="button"
          aria-controls={props.id || inputId}
          onClick={changeInputToEnabled}
        >
          <EditIcon font-size="24px" />
        </button>
      )}
      <button
        type="button"
        aria-controls={props.id || inputId}
        aria-hidden="true"
        className="clear"
      >
        <ClearIcon font-size="30px" />
      </button>
    </React.Fragment>
  );
};

Edit.propTypes = {
  type: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired,
  changeInputToEnabled: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  props: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired
};

export default Edit;
