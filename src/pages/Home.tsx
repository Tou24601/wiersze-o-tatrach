import MapHolder from "../components/MapHolder";

interface Poem {
  lat: number;
  lng: number;
  id: number;
}

interface Props {
  poemsData: Array<Poem>;
}

const Home = ({ poemsData }: Props) => {
  return (
    <>
      <MapHolder poemsData={poemsData} />
    </>
  );
};

export default Home;
