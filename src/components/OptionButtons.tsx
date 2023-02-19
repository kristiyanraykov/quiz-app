import React from 'react';

type Props = {
  option: string;
  isDifficultySelected?: boolean;
  isCategorySelected?: boolean;
};

function OptionButtons({ option }: Props) {
  return (
    <button className='px-3 py-1.5 border border-secondary text-white rounded-lg'>
      {option}
    </button>
  );
}

export default OptionButtons;
