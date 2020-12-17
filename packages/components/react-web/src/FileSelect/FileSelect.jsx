import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { helpers } from '@compassion-gds/elements';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import { fileSelectStyles } from './FileSelect.styles';

/**
 * UI component for uploading media
 */
export const FileSelect = ({ label, emptyStateLabel, ...props }) => {
  const inputEl = useRef(null);
  const [labelText, setLabelText] = useState(emptyStateLabel);

  const updateFiles = () => {
    const fileNames = Array.from(inputEl.current.files).map(
      (file) => file.name
    );
    setLabelText(fileNames.length > 0 ? fileNames.join(', ') : emptyStateLabel);
  };

  const theme = useTheme().component.fileSelect;
  const id = props.id || helpers.id();

  return (
    <div css={fileSelectStyles(theme)}>
      <input
        type="file"
        ref={inputEl}
        onChange={updateFiles}
        name="fileSelect"
        id={`gds-${id}`}
        multiple
        accept="image/*, video/*"
      />
      <Button primary label={label} onClick={() => inputEl.current.click()} />
      <span className="file-select__summary" title={labelText}>
        {labelText}
      </span>
    </div>
  );
};

FileSelect.propTypes = {
  /**
   * Button contents.
   */
  label: PropTypes.string,
  /**
   * Text displayed when no files have been selected.
   */
  emptyStateLabel: PropTypes.string,
  /**
   * Optional. An id will be generated if not supplied.
   */
  id: PropTypes.string,
};

FileSelect.defaultProps = {
  label: 'Choose File(s)',
  emptyStateLabel: 'No files selected.',
};
