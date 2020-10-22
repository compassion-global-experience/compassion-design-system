import React from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import * as headerStyles from './Header.styles';

import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';

export const Header = ({ height, user, onLogin, onLogout, onCreateAccount }) => (
  <header css={headerStyles.headerStyles} style={{'--header-height': height}}>
    <div className="header__mark">
      <Logo />
      <span>Compassion International</span>
    </div>
    <div>
      {user ? (
        <Button size="small" onClick={onLogout} label="Log out" />
      ) : (
        <>
          <Button size="small" onClick={onLogin} label="Log in" />
          <Button
            primary
            size="small"
            onClick={onCreateAccount}
            label="Sign up"
          />
        </>
      )}
    </div>
  </header>
);

Header.propTypes = {
  height: PropTypes.string,
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  height: '44px',
  user: null,
};
