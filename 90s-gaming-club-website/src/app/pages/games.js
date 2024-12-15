import '../output.css';

export default function Games() {
  const games = [
    { name: 'Super Mario', platform: 'SNES' },
    { name: 'Sonic the Hedgehog', platform: 'Sega Genesis' },
    { name: 'Pac-Man', platform: 'Arcade' },
    { name: 'The Legend of Zelda', platform: 'NES' },
  ];
  return (
    <div className='bg-black text-white min-h-screen p-6 font-retro'>
      <h1 className='text-3xl md:text-5xl text-neon-green mb-6'>Games Gallery</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {games.map((game, idx) => {
          <div
            key={idx}
            className='bg-neon-purple text-black p-4 rounded shadow-md transform hover:scale-105 transition-transform'>
            <h2 className='text-2xl font-bold mb-2'>{game.name}</h2>
            <p className='text-lg'>Platform: {game.platform}</p>
          </div>
        })}
      </div>
    </div>
  )
}
