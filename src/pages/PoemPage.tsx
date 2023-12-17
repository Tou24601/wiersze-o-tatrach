import { useParams } from "react-router";
import { useState, useEffect } from "react";

interface Poem {
  id: number;
  title: string;
  underTitle: string;
  authors: string;
  picture: string;
  contents: string;
  audio?: string;
}

interface Props {
  poemsData: Array<Poem>;
}

const PoemPage = ({ poemsData }: Props) => {
  //const [currentPoemData, setCurrentPoemData] = useState<Array<Poem>>([]);
  const { id } = useParams();
  const currentPoemId = Number(id);
  console.log(currentPoemId);
  console.log(poemsData);
/*
  useEffect(() => {
    setCurrentPoemData(poemsData);
    console.log(poemsData)
  }, [poemsData]);*/

  return (
    <>
      <div
        className="poemHolder mainContainer"
        style={{ backgroundImage: `url(${poemsData[currentPoemId].picture})` }}
      >
        <div className="shadow position-relative p-3 pt-5 p-lg-5 ">
          <h3
            className="poemTitle"
            dangerouslySetInnerHTML={{ __html: poemsData[currentPoemId].title }}
          ></h3>
          <p
            className={
              poemsData[currentPoemId].underTitle ? "poemUnderTitle" : "d-none"
            }
            dangerouslySetInnerHTML={{
              __html: poemsData[currentPoemId].underTitle,
            }}
          ></p>
          <p
            className="poemFontSizing italics pt-1 pt-lg-3 pb-1 pb-lg-4 "
            dangerouslySetInnerHTML={{
              __html: poemsData[currentPoemId].authors,
            }}
          ></p>
          <p
            className="poemFontSizing poemContents lh-base fw-bolder"
            dangerouslySetInnerHTML={{
              __html: poemsData[currentPoemId].contents,
            }}
          ></p>
        </div>
      </div>
    </>
  );
};
export default PoemPage;
