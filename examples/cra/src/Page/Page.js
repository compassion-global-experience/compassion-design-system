import Logo from './Logo.svg';
import './styles.css';

export function Page() {
  return (
    <main className="main-content">
      <img src={Logo} alt='Compassion website logo' className='App-logo' />
    </main>
  );
}

export default Page;
