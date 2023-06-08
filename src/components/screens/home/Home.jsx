import Container from 'react-bootstrap/esm/Container';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      <Container>
        <h1 className={styles.text}>Добро пожаловать в систему кампусных курсов</h1>
      </Container>
    </div>
  );
}

export default Home;
