import React from "react";
import "./Services.css";
import MyCard from "./MyCard";

// Example service data
const servicesData = [
  {
    title: "Web Development",
    description:
      "We build modern, responsive, and secure websites tailored to your business needs. Whether you need a simple landing page or a complex web application, we’ve got you covered.",
    features: [
      "Custom Web Design",
      "E-commerce Solutions",
      "CMS Development",
      "SEO Optimization",
      "Web Hosting Setup",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "We offer full-stack mobile app development for both Android and iOS platforms. Our team specializes in building user-friendly and scalable mobile applications.",
    features: [
      "Native Mobile Apps (Android, iOS)",
      "Cross-Platform Solutions (React Native, Flutter)",
      "App Maintenance & Updates",
      "Push Notifications",
      "Integration with Backend Systems",
    ],
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your brand’s visibility and reach with our expert digital marketing services. We cover everything from SEO to paid advertising and social media marketing.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Management",
      "Pay-Per-Click (PPC) Campaigns",
      "Email Marketing",
      "Content Strategy & Creation",
    ],
  },
  {
    title: "Graphic Design",
    description:
      "Get stunning visual content that captures your brand’s essence. Our graphic design services help businesses stand out with creative and professional designs.",
    features: [
      "Logo Design & Branding",
      "Business Cards & Stationery",
      "Brochures & Flyers",
      "Web & App UI/UX Design",
      "Social Media Graphics",
    ],
  },
  {
    title: "Cloud Solutions",
    description:
      "We offer cloud-based solutions that make it easier for your business to scale, collaborate, and secure your data. From cloud hosting to cloud migration, we have it all.",
    features: [
      "Cloud Hosting & Storage",
      "Cloud Migration",
      "Infrastructure as a Service (IaaS)",
      "Cloud Security Solutions",
      "Disaster Recovery",
    ],
  },
  {
    title: "Consulting Services",
    description:
      "Our consulting services provide tailored solutions to help you achieve your business goals. Whether you're looking for strategy advice, process improvement, or IT solutions, we’ve got the expertise.",
    features: [
      "Business Strategy Consulting",
      "IT & Technology Consulting",
      "Process Improvement",
      "Risk Management",
      "Data Analytics & Business Intelligence",
    ],
  },
];

const Services = () => {
  return (
    <div className="py-40 text-center">
      <h1 className="text-4xl">Our Services</h1>
      <p className="text-xl py-10">
        Explore the wide range of services we offer to meet your business needs:
      </p>
      <div className="services-list">
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
      </div>
    </div>
  );
};

export default Services;
