import Card from "../Card/Card";

function CardList({ cards }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "30px"
      }}
    >
      {cards.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default CardList;