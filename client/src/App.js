import Header from "./components/Header";
import GradesPage from "./components/GradesPage";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <GradesPage />
    </div>
  );
};

export default App;
