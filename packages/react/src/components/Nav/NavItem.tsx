'use client';

import styles from '@compassion-design-system/core/src/components/Nav/navItem.module.css';
import { getClasses } from '../../utils/classes';
import { cdsIconMap } from '../Icon/Icon';
import { useState, useEffect, useRef, MouseEvent, forwardRef } from 'react';

export interface NavItemProps {
  text: string;
  href: string;
  icon?: keyof typeof cdsIconMap;
  iconDescription?: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
  isDisabled?: boolean;
  isActive?: boolean;
  isContained?: boolean;
  subItems?: NavItemProps[];
  isSubNav?: boolean;
  openSubNav?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disableAutoCloseOnClick?: boolean;
}

const NavItem = forwardRef<HTMLAnchorElement, NavItemProps>((props, ref) => {
  const {
    text,
    href,
    icon,
    iconDescription,
    target = '_self',
    isDisabled = false,
    isActive = false,
    isContained = false,
    subItems = [],
    isSubNav = false,
    openSubNav = false,
    onClick,
    disableAutoCloseOnClick = false,
  } = props;

  const [isSubNavOpen, setIsSubNavOpen] = useState<boolean>(openSubNav);
  const subNavRef = useRef(null);

  const subNavItems = subItems.map((item) => {
    return <NavItem {...item} key={item.text} isSubNav />;
  });

  useEffect(() => {
    if (subNavRef.current) {
      if (!isSubNavOpen) {
        subNavRef.current.style.maxHeight = null;
      } else {
        subNavRef.current.style.maxHeight =
          subNavRef.current.scrollHeight + 'px';
      }
    }
  }, [isSubNavOpen]);

  useEffect(() => {
    setIsSubNavOpen(openSubNav);
  }, [openSubNav]);

  const handleOnClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (!disableAutoCloseOnClick) {
      setIsSubNavOpen(!isSubNavOpen);
    }
  };

  const navItemContainerClasses = ['cds-navItemContainer'];
  if (isContained) {
    navItemContainerClasses.push('cds-navItemContainer--contained');
  }

  const navItemClasses = ['cds-navItem'];
  if (isDisabled) {
    navItemClasses.push('cds-navItem--disabled');
  } else {
    if (isActive) {
      navItemClasses.push('cds-navItem--active');
    }
  }

  const NavIcon = cdsIconMap[icon];
  const ExpandSubsectionIcon = cdsIconMap.caretDown;

  return (
    <div className={getClasses(styles, navItemContainerClasses)}>
      <div className={getClasses(styles, navItemClasses)}>
        {icon && NavIcon && (
          <NavIcon
            className={getClasses(styles, ['cds-navItemSvg'])}
            size={isSubNav ? 16 : 20}
            alt={iconDescription}
          />
        )}
        <div className={getClasses(styles, ['cds-navItemText'])}>
          {isDisabled && (
            <span className={getClasses(styles, ['cds-navItemText__disabled'])}>
              {text}
            </span>
          )}{' '}
          {!isDisabled && (
            <a
              ref={ref}
              href={href}
              target={target}
              aria-disabled="false"
              onClick={handleOnClick}
            >
              {text}
            </a>
          )}
        </div>
        {!isSubNav && subItems.length > 0 && (
          <button
            aria-label={
              isSubNavOpen ? 'Hide sub navigation' : 'Show sub navigation'
            }
            className={getClasses(styles, [
              'cds-navItemExpander',
              isSubNavOpen ? 'cds-navItemExpander--opened' : '',
            ])}
            onClick={() => {
              setIsSubNavOpen(!isSubNavOpen);
            }}
          >
            <ExpandSubsectionIcon
              className={getClasses(styles, ['cds-navItemSvg'])}
              size={isSubNav ? 16 : 20}
            />
          </button>
        )}
      </div>
      {!isSubNav && subItems.length > 0 && (
        <div
          ref={subNavRef}
          className={getClasses(styles, ['cds-subNavWrapper'])}
        >
          <div className={getClasses(styles, ['cds-subNavContainer'])}>
            {subNavItems}
          </div>
        </div>
      )}
    </div>
  );
});

NavItem.displayName = 'NavItem';
export default NavItem;
