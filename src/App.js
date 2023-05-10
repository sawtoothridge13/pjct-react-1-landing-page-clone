import styles from './App.module.scss';

export default function App() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <span>Bolton Remote is now a part of SupportNinja!</span>
          <a href="/#">Read about the acquisition.</a>
        </div>

        <nav>
          <img></img>
          <ul>
            <li>asdf</li>
            <li>adf</li>
            <li>adf</li>
            <li>adf</li>
          </ul>
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
        <section>Section 2</section>
        <section>Section 3</section>
        <section>Section 4</section>
        <section>Section 5</section>
        <section>Section 6</section>
        <section>Section 7</section>
      </main>
      <footer>footer</footer>
    </>
  );
}
