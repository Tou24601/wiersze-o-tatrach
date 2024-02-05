import MapHolder from "../components/MapHolder";

interface Poem {
  lat: number;
  lng: number;
  id: number;
}

interface Props {
  poemsData: Array<Poem>;
}

const MapPage = ({ poemsData }: Props) => {
  return (
    <>
      <MapHolder poemsData={poemsData} />
    </>
  );
};

export default MapPage;
