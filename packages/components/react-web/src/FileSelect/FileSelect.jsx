import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { helpers } from '@compassion-gds/elements';

import { fileSelectStyles } from './FileSelect.styles';

import { Button } from '../Button';
import { useTheme } from '../hooks';

/**
 * UI component for uploading media
 */
export const FileSelect = ({ label, emptyStateLabel, id, ...props }) => {
  const inputEl = useRef(null);
  const [labelText, setLabelText] = useState(emptyStateLabel);

  const updateFiles = () => {
    const fileNames = Array.from(inputEl.current.files).map(
      (file) => file.name
    );
    setLabelText(fileNames.join(', ') || emptyStateLabel);
  };

  const theme = useTheme().component.fileSelect;
  const inputId = id ?? helpers.id();

  return (
    <div css={fileSelectStyles(theme)} {...props}>
      <input
        type="file"
        ref={inputEl}
        onChange={updateFiles}
        name="fileSelect"
        id={`gds-${inputId}`}
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
  id: undefined,
  label: 'Choose File(s)',
  emptyStateLabel: 'No files selected.',
};
