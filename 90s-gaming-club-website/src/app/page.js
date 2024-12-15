import { Home, Games} from "./pages/pages.js"
export default function App() {
  return (
    <div className="container">
      <img
        src="https://external-preview.redd.it/t4Hn8oyyUrEfzSZVaZb-LkzNLu9IBN9bEICH0qxPcp4.jpg?auto=webp&s=7435986ffb8f36d6fbbbc6c2326500f722ca976d"
        alt="Background Image"
        layout="fill" // Make the image fill the container
        objectFit="cover" // Cover the entire container
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
      </div>
    </div>
  )
}