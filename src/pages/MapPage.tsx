import MapHolder from "../components/MapHolder";

interface Poem {
  lat: number;
  lng: number;
  id: number;
}

interface Props {
  poemsData: Array<Poem>;
  handleLoadedMap: void;
}

const MapPage = ({ poemsData, handleLoadedMap }: Props) => {
  return (
    <>
      <MapHolder poemsData={poemsData} handleLoadedMap={handleLoadedMap} />
    </>
  );
};

export default MapPage;
