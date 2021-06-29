import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FileDrop } from 'react-file-drop';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from '../hooks';
import uploaderStyles from './Uploader.styles';
import { uploadFiles } from './helpers';

/**
 * Component for uploading files
 */
export const Uploader = () => {
  const theme = useTheme();
  const fileInputRef = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = async (files) => {
    if (isUploading) return;
    setIsUploading(true);
    await uploadFiles(files);
    setIsUploading(false);
  };

  return (
    <div>
      <FileDrop
        css={uploaderStyles(theme.component.uploader)}
        onDrop={(e) => handleUpload(e)}
        onTargetClick={() => fileInputRef.current.click()}
      >
        {isUploading ? (
          <p>
            <span>Uploading...</span>
          </p>
        ) : (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19.4 10C18.7 6.6 15.6 4 12 4 9.1 4 6.6 5.6 5.4 8 2.3 8.4 0 10.9 0 14c0 3.3 2.7 6 6 6h13c2.8 0 5-2.2 5-5 0-2.6-2-4.8-4.6-5zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
            </svg>
            <p>
              <span>Choose a file</span> or drag it here!
            </p>
            <input
              onChange={(e) => handleUpload(e.target.files)}
              ref={fileInputRef}
              type="file"
            />
          </div>
        )}
      </FileDrop>
    </div>
  );
};

Uploader.propTypes = {};

Uploader.defaultProps = {};
