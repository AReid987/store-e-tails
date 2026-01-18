import Navbar from '@store-e-tail/ui/components/Navbar';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <section className={styles.section}>
          <h2>See Your Stories</h2>
          <p>Here you can view all of your saved stories.</p>
        </section>
        <section className={styles.section}>
          <h2>Create a Story</h2>
          <p>Create a new story using our AI-powered Storybook Agent!</p>
          {/* Storybook Agent Placeholder - Functionality to be implemented later */}
        </section>
        <section className={styles.section}>
          <h2>Community Stories</h2>
          <p>Explore stories created by other users in the community.</p>
        </section>
      </div>
    </div>
  );
}
