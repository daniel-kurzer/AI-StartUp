import LogoIcon from '@/assets/logo.svg';
import MenuIcon from '@/assets/icon-menu.svg';
import { Button } from '@/components/Button';

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 backdrop-blur md:backdrop-blur-none">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          <div>
            <a href="#">
              <div className="border w-10 h-10 rounded-lg inline-flex justify-center items-center border-white/15 cursor-pointer hover:scale-110 transition">
                <LogoIcon className="h-8 w-8" />
              </div>
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <a className="text-white/70 hover:text-white transition hover:scale-110" href="#features">Features</a>
              <a className="text-white/70 hover:text-white transition hover:scale-110" href="#developers">Developers</a>
              <a className="text-white/70 hover:text-white transition hover:scale-110" href="#pricing">Pricing</a>
              <a className="text-white/70 hover:text-white transition hover:scale-110" href="#changelog">Changelog</a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <Button>Join Waitlist</Button>
            <MenuIcon className="h-8 w-8 md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};
