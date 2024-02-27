import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-cyan-100 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <>
            <h1 className='text-3xl font-bold capitalize tracking-wider'>
              hello, i'm martshal kohn
            </h1>
            <p className='text-xl text-center text-cyan-800 capitalize'>
              ('marshall kahn')
            </p>
            <p className='mt-4 text-2xl text-slate-700 capitalize tracking-wide'>
              mobile and web development
            </p>
          </>
          {/* <p className='mt-4 text-lg text-slate-700 capitalize tracking-wide'>
            coding and presentation alchemy
          </p> */}
          <div className='flex gap-x-4 mt-4'>
            <a href='#'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='#'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='#'>
              <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={heroImg} className='h-80 lg:h-96' />
        </article>
      </div>
    </div>
  );
};

export default Hero;
