import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <div>
      <section className='bg-cyan-100 py-20' id='about'>
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
          <img src={aboutSvg} className='w-full h-64' />
          <article>
            <SectionTitle text='code and coffee' />
            <p className='text-slate-600 mt-8 leading-loose'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex
              doloribus unde veniam possimus neque omnis, quisquam deleniti
              corrupti, ad animi voluptatem eos quae illum voluptate dolorum
              repellendus doloremque ipsam.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
