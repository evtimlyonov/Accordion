import { useState } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi';

export const List = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [modal, setModal] = useState(false);

  const clickHandler = () => {
    setModal((prevState) => !prevState);
  };

  return (
    <>
      <article className='py-[1rem] px-[1.5rem] border border-[#eae6eb] mb-[1rem] rounded shadow-xl'>
        <header className='flex justify-between items-center'>
          <h4 className='font-bold'>{question}</h4>
          <button
            className='flex justify-center items-center bg-[#eae6eb] p-1 rounded-full w-[2rem] h-[2rem]'
            onClick={clickHandler}>
            {!modal ? (
              <BiPlus className='text-[#b4345c]' />
            ) : (
              <BiMinus className='text-[#b4345c]' />
            )}
          </button>
        </header>
        {modal && <p className='mt-4'>{answer}</p>}
      </article>
    </>
  );
};
