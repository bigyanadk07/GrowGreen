import React from 'react';
import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { Features } from '../components/Features';
import { Newsletter } from '../components/Newsletter';

export const Home:React.FC = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Features />
      <Newsletter />
    </>
  );
}