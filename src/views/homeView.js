import React from 'react';
import NavBar from '../components/navbar';
import Hero from '../components/heroSection';
import HeroTwo from '../components/heroSectionS';
import ContactForm from '../components/contactForm';
import TopCharts from '../components/topCharts';
import FrequentQuestions from '../components/frequentQuestions';

const Home = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <HeroTwo />
            <TopCharts />
            <FrequentQuestions />
            <ContactForm />
        </div>
    )
}

export default Home;