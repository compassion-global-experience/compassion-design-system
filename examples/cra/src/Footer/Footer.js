import { Button, TextField } from '@compassion-global-experience/react';
import './styles.css';

export function Footer() {
  return (
    <footer className="app-footer">
      <form
        onSubmit={(e) => {
          console.log('form submit');
          e.preventDefault();
        }}
        className="subscribe-form"
      >
        <TextField
          label="Subscribe"
          id="subscribe"
          placeholder="username@domain.com"
          type="email"
        />
        <Button size="medium" type="submit" label="Submit" />
      </form>
    </footer>
  );
}

export default Footer;
