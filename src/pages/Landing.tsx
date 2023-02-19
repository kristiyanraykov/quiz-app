import React from 'react';
import OptionButtons from '../components/OptionButtons';
import { useFetchCategoriesQuery } from '../store';

type Props = {};

function Landing({}: Props) {
  // const { data: categories, isLoading, isError } = useFetchCategoriesQuery();
  // console.log(categories, isLoading);
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-4xl text-secondary'>
        Welcome to Quiz App! Select difficulty and category to continue
      </h1>
      <div className='flex flex-col'>
        <h2 className='text-xl text-secondary'>Difficulty</h2>
        <div className='flex'>
          <OptionButtons option='easy' />
          <OptionButtons option='medium' />
          <OptionButtons option='hard' />
        </div>
      </div>
      <div>
        <h2 className='text-xl text-secondary'>Categories</h2>
        <div>
          <OptionButtons option='category' />
          <OptionButtons option='category' />
          <OptionButtons option='category' />
          <OptionButtons option='category' />
          <OptionButtons option='category' />
          <OptionButtons option='category' />
        </div>
      </div>
    </div>
  );
}

export default Landing;
