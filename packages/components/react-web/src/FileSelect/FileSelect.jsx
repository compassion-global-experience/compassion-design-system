import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { fileSelectStyles } from './FileSelect.styles';

/**
 * UI component for uploading media
 */
export const FileSelect = ({ label }) => {
  const inputEl = useRef(null);
  const [labelText, setLabelText] = useState('No file(s) selected');

  const updateFiles = () => {
    const fileNames = Array.from(inputEl.current.files).map(
      (file) => file.name
    );
    setLabelText(
      fileNames.length > 0 ? fileNames.join(', ') : 'No file(s) selected'
    );
  };

  return (
    <div css={fileSelectStyles}>
      <input
        type="file"
        ref={inputEl}
        onChange={updateFiles}
        name="fileUpload"
        id="fileUpload"
        multiple
        accept="image/*, video/*"
      />
      <button type="button" onClick={() => inputEl.current.click()}>
        {label}
      </button>
      <span title={labelText}>{labelText}</span>
    </div>
  );
};

FileSelect.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string,
};

FileSelect.defaultProps = {
  label: 'Choose File(s)',
};
