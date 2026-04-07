
import CardList from "./components/CardList/CardList";
import cardsData from "./data";
import UserForm from "./components/UserForm/UserForm";
import ColorBlock from "./components/ColorBlock/ColorBlock";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ffb6c1",
          textShadow: "0 0 10px white"
        }}
      >
        🌸 Anime Sakura 🌸
      </h1>

      <CardList cards={cardsData} />
      <UserForm />
      <ColorBlock />
    </div>
  );
}

export default App;