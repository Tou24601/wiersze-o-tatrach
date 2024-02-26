import { useMemo, useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

interface Poem {
  lat: number;
  lng: number;
  id: number;
}

interface Props {
  poemsData: Array<Poem>;
  handleLoadedMap: void;
}

export default function MapHolder({ poemsData, handleLoadedMap }: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCbWX4ZQ15_lzRvRWoGPsp9xDII2k5fSls",
  });
  //const [mapReady, setMapReady] = useState(false);
  useEffect(() => {
    handleLoadedMap(true)
  }, [isLoaded, true]);
  if (!isLoaded) {
    return <div>Zaczekaj na załadowanie się mapy</div>;
  }
  return <Map poemsData={poemsData} handleLoadedMap={handleLoadedMap} />;
}



function Map({ poemsData }: Props) {
  const center = useMemo(
    () => ({ lat: 49.21979356285626, lng: 20.00825948129149 }),
    []
  );

  const handleClick = (newId: string) => {
    window.open(`#/${newId}`, "_self");
  };
  return (
    <div className="">
      {" "}
      <GoogleMap
        zoom={12.5}
        center={center}
        mapContainerClassName="mainContainer"
      >
        {poemsData.map((item: Poem) => {
          return (
            <>
              <MarkerF
                position={{ lat: item.lat, lng: item.lng }}
                key={item.id}
                onClick={() => handleClick(item.id.toString())}
              ></MarkerF>
            </>
          );
        })}
      </GoogleMap>
    </div>
  );
}
