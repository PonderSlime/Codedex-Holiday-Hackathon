import { Home, Games} from "./pages/pages.js"
export default function App() {
  return (
    <div>
      <img
        className="full-image"
        src="https://external-preview.redd.it/t4Hn8oyyUrEfzSZVaZb-LkzNLu9IBN9bEICH0qxPcp4.jpg?auto=webp&s=7435986ffb8f36d6fbbbc6c2326500f722ca976d"
        alt="Background Image"
      />
      <div className="content">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <Home />
        <Games />
        <div className="bg-neon-purple w-screen flex justify-center items-center mt-20">
        <img src="https://cloud-c60agoswh-hack-club-bot.vercel.app/0pacman.gif" className="w-1/8 h-1/8" />
          <img src="https://cloud-dm1fqxi2h-hack-club-bot.vercel.app/0image_from_ios.gif" className="w-1/8 h-1/8" />
          
          
        </div>
      </div>
    </div>
  )
}