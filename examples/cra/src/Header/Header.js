import { Button } from '@compassion-gds/react';
import './styles.css';

export function Header() {
  return (
    <header className="app-header">
      <nav>
        <Button onClick={() => console.log('GDS')} label="GDS Button" />
        <Button mode="primary" onClick={() => console.log('GDS Primary')} label="GDS Primary" />
        <button onClick={() => console.log('regular')}>
          Regular Native Button
        </button>
      </nav>
    </header>
  );
}

export default Header;
