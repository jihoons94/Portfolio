import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

