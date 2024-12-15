import '../output.css';
import Link from 'next/link';
export default function Home() {

  return (
    <div className='text-white min-h-screen flex flex-col items-center justify-center font-retro' id='top'>
      
      <h1 className='text-4xl md:text-6xl text-neon-green font-bold mb-6'>Gaming Club</h1>
      <p className='text-center text-xl mb-10 px-6'>
        Welcome to the ultimate 90s gaming club! Dive into the retro vibes and relive the glory of classic games.
      </p>
      <Link
        href='#games'
        className="bg-neon-blue text-black px-6 py-3 rounded shadow-md hover:scale-110 transition-transform">
        Enter the Arcade
      </Link>
    </div>
  )
}
