import { useHistory } from "react-router-dom";
import styled from "styled-components";
const Avatar = styled.img`
  width: 100%;
  border-radius: 0.2rem;
`;
const Name = styled.h2`
  color: gray;
  text-align: center;
`;
const Card = styled.div`
  width: 20%;
  max-width: 200px;
  margin: 1rem;
  cursor: pointer;
`;
export default function Profile(props) {
  const history = useHistory();
  const { profile, setActiveProfile } = props;
  const { name, avatar } = profile;

  const handleActiveProfile = () => {
    setActiveProfile(profile);
    history.push("/home");
  };
  return (
    <Card onClick={handleActiveProfile}>
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </Card>
  );
}
