import styles from "./page.module.css";
import HomeContainer from '@/containers/home'
export default function Home() {
  return (
    <main className={styles.main}>
      <HomeContainer/>
    </main>
  );
}
