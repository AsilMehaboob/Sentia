import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black text-white gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">&copy; 2024 Sentia. </p>
     <nav className="sm:ml-auto flex gap-4 sm:gap-6 bg">
        <Link href="https://opensource.org/licenses/MIT" className="text-xs hover:underline underline-offset-4" prefetch={false}>
          MIT License
        </Link>
       
      </nav>
    </footer>
  );
};

export default Footer;
