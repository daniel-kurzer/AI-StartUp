import acmeLogo from '@/assets/logo-acme.png';
import apexLogo from '@/assets/logo-apex.png';
import celestialLogo from '@/assets/logo-celestial.png';
import quantumLogo from '@/assets/logo-quantum.png';
import pulseLogo from '@/assets/logo-pulse.png';
import echoLogo from '@/assets/logo-echo.png';

export const LogoTicker = () => {
  const logos = [acmeLogo, apexLogo, celestialLogo, quantumLogo, pulseLogo, echoLogo];

  return (
    <section className="py-20 md:py-24" id='developers'>
      <div className="container">
        <div className="flex items-center">
          <div className="flex-1 md:flex-none gap-5">
            <h2 className='text-lg md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_bottom_right,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center'>Trusted by top innovative Teams :</h2>
          </div>
          <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <div className="flex flex-none gap-14 logo-ticker">
              {[...logos, ...logos].map((logo, index) => (
                <img src={logo.src} key={`${logo.src}-${index}`} className="h-6 w-auto" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
