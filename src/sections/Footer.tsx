import LogoIcon from '@/assets/logo.svg'
import Instagram from '@/assets/social-instagram.svg';
import Twitter from '@/assets/social-x.svg';
import Youtube from '@/assets/social-youtube.svg';

export const Footer = () => {
  return <footer className='py-5 border-t border-white/15' id='company'>
    <div className='container'>
      <div className='flex flex-col lg:flex-row lg:items-center gap-8'>
        <div className='flex gap-2 items-center lg:flex-1'>
          <LogoIcon className="h-6 w-6 animate-pulse" />
          <div className='font-semibold tracking-tight animate-pulse'>QuantumLeapSEO ©</div>
        </div>
        <nav className='flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center'>
          <a href="#developers" className='text-white/70 hover:text-white text-xs md:text-sm transition hover:scale-110'>Developers</a>
          <a href="#features" className='text-white/70 hover:text-white text-xs md:text-sm transition hover:scale-110'>Features</a>
          <a href="#company" className='text-white/70 hover:text-white text-xs md:text-sm transition hover:scale-110'>Company</a>
          <a href="#blog" className='text-white/70 hover:text-white text-xs md:text-sm transition hover:scale-110'>Blog</a>
          <a href="#changelog" className='text-white/70 hover:text-white text-xs md:text-sm transition hover:scale-110'>Changelog</a>
        </nav>
        <div className='flex gap-5 lg:flex-1 lg:justify-end'>
          <Twitter className="text-white/40 hover:text-white transition cursor-pointer"/>
          <Instagram className="text-white/40 hover:text-white transition cursor-pointer"/>
          <Youtube className="text-white/40 hover:text-white transition cursor-pointer"/>
        </div>
      </div>
    </div>
  </footer>;
};
