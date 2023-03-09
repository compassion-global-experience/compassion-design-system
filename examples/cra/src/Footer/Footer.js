import { Button } from '@compassion-gds/react';
import './styles.css';

export function Footer() {
  return (
    <footer className='app-footer'>
      <form
        onSubmit={e => {
          console.log('form submit');
          e.preventDefault();
        }} className='subscribe-form'
      >
        <div>
          <label className='form-label' htmlFor='subscribe'>
            Subscribe
          </label>
          <div className='form-field default medium'>
            <input
              id='subscribe'
              type='email'
              className='form-input'
              placeholder='username@domain.com'
            />
          </div>
        </div>

        <Button size='medium' type='submit' label='Submit' />
      </form>
    </footer>
  );
}

export default Footer;
