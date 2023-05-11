import styles from './App.module.scss';
import { ReactComponent as Logo } from './images/logo-mark.svg';
import { ReactComponent as NinjaLogo } from './images/supportninja-logo.svg';

export default function App() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.alertBar}>
          <span>Bolton Remote is now a part of SupportNinja!</span>
          <a href="/#">Read about the acquisition.</a>
        </div>

        <nav className={styles.navBar}>
          <Logo />
          <NinjaLogo />
          <ul>
            <li>Solutions</li>
            <li>How it works</li>
            <li>About</li>
            <li>Resources</li>
          </ul>
          <button>Get Started</button>
        </nav>
      </header>

      <main>
        <section>
          <h1>A better way to grow</h1>
          <p>
            Seamlessly scale your team and flourish with global outsourced
            talent.
          </p>
        </section>
        <section className={styles.sectionTwo}></section>
        <section>className={styles.sectionThree}</section>
        <section>className={styles.sectionFour}</section>
        <section>className={styles.sectionFive}</section>
        <section>className={styles.sectionSix}</section>
        <section>className={styles.sectionSeven}</section>
      </main>
      <footer>footer</footer>
    </>
  );
}
