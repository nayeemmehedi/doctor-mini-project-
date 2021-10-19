import React from 'react';
import Carusol from '../Carusol/Carusol';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer';

import Navbar from '../Navbar';
import Services2 from '../Services/Services2';
import Doctortype from "../doctortype/Doctortype"
import Facility from '../Facilitys/Facilitys'
import Make  from "../make/Make"


const Header = () => {
    return (
        <div>
           
            <Carusol></Carusol>
            <Make/>
            <Doctortype></Doctortype>
            <Facility></Facility>
            <Services2></Services2>
            <ContactUs></ContactUs>
            
           
        </div>
    );
};

export default Header;