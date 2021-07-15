import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';

import { helpers } from '@compassion-gds/elements';
import menuStyles from './Menu.styles';
import { useTheme } from '../hooks';
// import { useDetectOutsideClick } from './useDetectOutsideClick';

export const Menu = ({ triggerOnHover, ...props }) => {
  const theme = useTheme();

  // if not hovered || clicked outside || clicked button

  const menuRef = useRef(null);
  const [triggerId] = useState(helpers.gdsId());
  const [dropdownId] = useState(helpers.gdsId());
  // const [isClickedOutside, setIsClickedOutside] = useDetectOutsideClick(
  //   menuRef,
  //   false
  // );
  const [isActive, setIsActive] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);

  const buttonEl = props.children.filter((child) => child.type === 'button')[0];
  const dropdownEl = props.children.filter(
    (child) =>
      child.type.displayName === 'List' ||
      child.type === 'ul' ||
      child.type === 'ol'
  )[0];
  const triggerProps = {
    className: `${
      buttonEl.props.className ? buttonEl.props.className : ''
    } gds-menu__trigger`,
    type: 'button',
    id: buttonEl.props.id || triggerId,
    'aria-haspopup': true,
    'aria-expanded': isActive,
    'aria-controls': dropdownId,
    onClick: () => {
      setIsActive(!isActive);
    },
    onMouseEnter: () => {
      if (triggerOnHover) {
        setIsActive(true);
      }
    },
    onMouseLeave: () => {
      if (triggerOnHover) {
        if (!isDropdownHovered) {
          setIsActive(false);
        }
      }
    },
  };

  const dropdownProps = {
    className: `${
      dropdownEl.props.className ? dropdownEl.props.className : ''
    } gds-menu__dropdown`,
    id: dropdownEl.props.id || dropdownId,
    'aria-labelledby': triggerId,
    onMouseEnter: () => {
      if (triggerOnHover) {
        setIsActive(true);
        setIsDropdownHovered(true);
      }
    },
    onMouseLeave: () => {
      if (triggerOnHover) {
        if (isActive) {
          setIsActive(false);
          setIsDropdownHovered(false);
        }
      }
    },
  };

  const m = (
    <div
      className="gds-menu"
      ref={menuRef}
      css={menuStyles(theme.component.menu)}
    >
      {React.Children.map(props.children, (child) => {
        let newProps;

        if (child.type === 'button') {
          newProps = triggerProps;
        } else if (
          child.type.displayName === 'List' ||
          child.type === 'ul' ||
          child.type === 'ol'
        ) {
          newProps = dropdownProps;

          newProps.children = React.Children.map(
            child.props.children,
            (liChild) => {
              const liProps = { role: 'none' };

              liProps.children = React.Children.map(
                liChild.props.children,
                (anchorChild) => {
                  const anchorProps = { role: 'menuitem' };
                  return React.cloneElement(anchorChild, anchorProps);
                }
              );
              return React.cloneElement(liChild, liProps);
            }
          );
        }

        const el = React.cloneElement(child, newProps);
        return el;
      })}
    </div>
  );

  return m;
};

Menu.propTypes = { triggerOnHover: PropTypes.bool };

Menu.defaultProps = { triggerOnHover: false };
