import '../output.css';

const games_list = [
  { key: 1, name: 'Super Mario', platform: 'NES', image: 'https://media.tenor.com/pKgBbArPChQAAAAM/mario-super.gif'},
  { key: 2, name: 'Sonic the Hedgehog', platform: 'Sega Genesis', image: 'https://media.tenor.com/7I3-Zakx62AAAAAM/sonic-mega-drive.gif' },
  { key: 3, name: 'Pac-Man', platform: 'Arcade', image: 'https://media.tenor.com/lbObw07b8FIAAAAM/pacman-pac.gif' },
  { key: 4, name: 'The Legend of Zelda', platform: 'NES', image: 'https://media.tenor.com/JXdxjNigjL8AAAAM/nes-zelda.gif' },
];

export default function Games() {
  return (
    <div className="text-white min-h-screen p-6 font-retro" id="games">
      <h1 className="text-3xl md:text-5xl text-neon-green mb-6">Games Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {games_list.map((item) => (
          <div
            key={item.key}
            className="bg-neon-purple text-black p-4 rounded shadow-md transform hover:scale-105 transition-transform"
          >
            <img src={item.image} classNam="absolute"/>
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-lg">Platform: {item.platform}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
