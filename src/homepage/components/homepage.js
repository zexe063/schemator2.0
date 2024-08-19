


import React from 'react';
import { FaSyncAlt, FaProjectDiagram, FaBolt, FaUpload, FaPencilAlt, FaCode, FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import  {NavLink,Link} from  "react-router-dom"
import Price from '../../dashboard/components/pricingcard/price';
import { IoIosArrowRoundForward } from "react-icons/io";

import code from "../images/code.png"
import code2 from "../images/code2.png"

function Header() {
  return (
  
  <header className="fixed w-full top-0 font-Inter">
  <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
    <div className="font-Dam-sans text-3xl text-transparent bg-clip-text bg-gradient-to-r from-design_color via-forward_color to-forward_color">
      Schemator
    </div>
    <div className="flex space-x-4 text-white font-Dam-sans items-center">
      <a href="#features" className="text-white hover:text-indigo-600 transition duration-300">Features</a>
      <a href="#pricing" className="text-white hover:text-indigo-600 transition duration-300">Pricing</a>
      <NavLink to={"/workshop"} className=" hidden sm:inline-block bg-white text-neutral-800 px-4 py-2 rounded font-Dam-sans transition duration-300">Get Started</NavLink>
      <NavLink to={"/signup"} className="hidden sm:inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 font-Dam-sans">Signup</NavLink>
    </div>
  </nav>
</header>

  );
}

function Hero() {
  return (
    // <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-32">
    <section className=" text-white font-Dam-sans  py-32">
      <div className="container mx-auto px-4 mt-8 text-center font-Inter">
        <h1 className="text-5xl font-bold mb-2 font-Dam-sans">Er Diagram and Schema</h1>
        <h6 className="mb-4 bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600 bg-clip-text p-2 text-3xl font-extrabold text-transparent font-Dam-sans">For Database Engineer</h6>
        <NavLink to={"/workshop"} className="py-2 px-2 text-sm rounded-3xl border-t-[1.5px] border-l-2 border-white/20 font-Dam-sans text-transparent  bg-clip-text bg-gradient-to-r from-design_color  via-forward_color to-forward_color ">Try Schemator Free</NavLink>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition duration-300 transform hover:-translate-y-1 hover:shadow-lg font-Inter">
      <div className="text-4xl text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="py-20 font-Inter">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureItem
            icon={<FaSyncAlt />}
            title="Reverse Engineering"
            description="Analyze existing MongoDB databases and generate schemas instantly."
          />
          <FeatureItem
            icon={<FaProjectDiagram />}
            title="Forward Engineering"
            description="Design schemas visually and generate MongoDB code with a click."
          />
          <FeatureItem
            icon={<FaBolt />}
            title="Real-time Sync"
            description="Keep your schemas and databases in sync automatically as you work."
          />
        </div>
      </div>
    </section>
  );
}

function HowItWorksItem({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center transition duration-300 transform hover:-translate-y-1 hover:shadow-lg font-Inter">
      <div className="text-4xl text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className=" py-20 font-Inter">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HowItWorksItem
            icon={<FaUpload />}
            title="1. Import"
            description="Upload your existing MongoDB database or start from scratch."
          />
          <HowItWorksItem
            icon={<FaPencilAlt />}
            title="2. Design"
            description="Use our intuitive interface to design and modify your schema."
          />
          <HowItWorksItem
            icon={<FaCode />}
            title="3. Generate"
            description="Export your schema as MongoDB code or documentation."
          />
        </div>
      </div>
    </section>
  );
}

function Demo() {
  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-4 text-center ">
        <h2 className="text-3xl font-bold text-white mb-2 font-Dam-sans tracking-wide"> Design For <span  className=' bg-design_color italic p-1 ml-1 '>Modeler</span></h2>
        <p className=" text-[15px] mb-6 text-center  font-Dam-sans tracking-wide text-Homepage_text_color opacity-normal">Time To Design and Manage your MongoDB Schemas In Click</p>
        <img src={code} alt="Schemator Demo" className="mx-auto rounded-lg shadow-lg" />
      </div>
    </section>

  )
}



function Demo2() {
    return (
      // <section id="demo" className="bg-gray-200 py-20">
      <section id="demo" className=" py-20">
        <div className="container mx-auto px-4 text-center font-Sans">
          <h2 className="text-3xl font-bold text-white mb-2 font-Dam-sans tracking-wide">Reverse engineering For<span className=' bg-revere_color mx-2 p-1 font  italic'> Anyliytics</span></h2>
          <p className="text-[15px] mb-6 font-Dam-sans tracking-wide text-Homepage_text_color opacity-normal">Just Enter Mongodb Atlas Url with Password And Collection Name</p>
          <img src={code2} alt="Schemator Demo" className="mx-auto rounded-lg shadow-lg" />
        </div>
      </section>
    );
  }

  function Demo3() {
    return (
      // <section id="demo" className="bg-gray-200 py-20">
      <section id="demo" className=" py-20">
        <div className="container mx-auto px-4 text-center font-Sans">
          <h2 className="text-3xl font-bold text-white mb-2 font-Dam-sans tracking-wide">Forward engineering For<span className=' bg-Ai_color mx-2 p-1 font  italic'> Anyliytics</span></h2>
          <p className="text-[15px] mb-5 font-Dam-sans tracking-wide text-Homepage_text_color">Watch how easy it is to design and manage your MongoDB schemas</p>
          <img src={code2} alt="Schemator Demo" className="mx-auto rounded-lg shadow-lg" />
        </div>
      </section>
    );
  }
  
  

function TestimonialItem({ content, author }) {
  return (
    <div className="  border-[0.5px] border-solid  border-card_border_color p-6 rounded-lg shadow-md">
      <p className=" font-Dam-sans mb-4 ">"{content}"</p>
      <p className="font-semibold">{author}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="py-20 font-Dam-sans">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-center text-Homepage_text_color mb-12 opacity-normal">Loved By Database Modeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialItem
            content="Schemator has dramatically improved our MongoDB development workflow. It's a game-changer!"
            author="John Doe, Senior Developer"
          />
          <TestimonialItem
            content="The visual approach to schema design makes it so much easier to understand and optimize our database structure."
            author="Jane Smith, Database Architect"
          />
          <TestimonialItem
            content="Schemator's reverse engineering feature saved us weeks of work on a legacy project. Highly recommended!"
            author="Mike Johnson, CTO"
          />
        </div>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer className=" bg-neutral-900  border-t-[1px] border-solid border-border_color mt-10 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-Dam-sans"  >About Schemator</h3>
            <p>Schemator is the leading MongoDB schema design tool, helping developers create efficient and scalable database structures.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 font-Dam-sans">Quick Links</h3>
            <ul className="space-y-2 font-Dam-sans">
              <li><a href="#features" className="hover:text-indigo-400 transition duration-300">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-indigo-400 transition duration-300">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-indigo-400 transition duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition duration-300">Documentation</a></li>
            </ul>
          </div>
          <div className=' font-Dam-sans'>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: support@schemator.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-2xl hover:text-indigo-400 transition duration-300"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-indigo-400 transition duration-300"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-indigo-400 transition duration-300"><FaLinkedin /></a>
              <a href="#" className="text-2xl hover:text-indigo-400 transition duration-300"><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="text-center pt-8">
          <p>&copy; 2024 Schemator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function Homepage() {
  return (
    // <div className="font-sans text-gray-800 bg-gray-100">
    <div className="bg-gradient-to-b from-neutral-900 via-gray-900 to-neutral-900 text-white">
      <Header />
      <Hero />
      <Demo />
      <Demo2></Demo2>
  
     
   
      <Testimonials />
<div className=' w-full'>
<Price ></Price>
</div>
      <Footer />
    </div>
  );
}

export default Homepage;