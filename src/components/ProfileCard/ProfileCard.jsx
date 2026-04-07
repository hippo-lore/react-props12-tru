import styled from "styled-components";

const Card = styled.div`
  width: 260px;
  background: linear-gradient(145deg, #ff007f, #a100ff);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  color: white;
  box-shadow: 0 0 25px #ff00ff;
  margin: 30px auto;
`;

const Avatar = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
  margin-bottom: 10px;
`;

const Name = styled.h2`
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Button = styled.button`
  margin-top: 12px;
  padding: 10px 15px;
  border-radius: 12px;
  border: none;
  background: white;
  color: #ff007f;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #ffe6f0;
  }
`;

function ProfileCard() {
  return (
    <Card>
      <Avatar src="https://i.imgur.com/6VBx3io.png" />
      <Name>Хіната Хюга</Name>
      <Description>
        Тиха, добра та сильна куноїчі з клану Хюга 🌸
      </Description>
      <Button>Follow</Button>
    </Card>
  );
}

export default ProfileCard;