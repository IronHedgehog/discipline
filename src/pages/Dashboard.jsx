import AllGoals from "../components/allGoals/AllGoals";
import Container from "../components/container/Container";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Motivation from "../components/motivation/Motivation";
import Projects from "../components/projects/Projects";
import Statistics from "../components/statistics/Statistics";

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Motivation />
      <Projects />
      <AllGoals />
      <Statistics />
      <Footer />
    </Container>
  );
};

export default Dashboard;
