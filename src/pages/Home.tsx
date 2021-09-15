import React from 'react';
import MetaTags from '../components/MetaTags';

const Home: React.FC = () => {
    return (
        <>
            <MetaTags
                title="EdwardMatthe.ws"
                description="My name is Edward Matthews. I am a South West England-based full stack web developer specialising in Django and React. I build responsive websites with robust backends to high standards, using HTML5, CSS3, JavaScript and Python."
                thumbnail="https://edwardmatthe.ws/logo.png"
                url="/"
            />
            <h1>Welcome 👋</h1>
            <h4>My name is Edward Matthews.</h4>
            <p>
                I&apos;m a South West England based freelance full stack web developer working (primarily) with React
                and Django.
            </p>
        </>
    );
};

export default Home;
