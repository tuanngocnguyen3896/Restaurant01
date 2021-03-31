import React from 'react';
import AboutBanner from '../../Components/About/AboutBanner';
import AboutTitle from '../../Components/About/AboutTitle';
import Counting from '../../Components/Counting/Counting';
import FeedBack from '../../Components/FeedBack/FeedBack';
import OurChef from '../../Components/OurChef/OurChef';

export default function About() {
    return (
        <div>
            <AboutBanner/>
            <AboutTitle/>
            <Counting/>
            <OurChef/>
            <FeedBack/>
        </div>
    )
}
