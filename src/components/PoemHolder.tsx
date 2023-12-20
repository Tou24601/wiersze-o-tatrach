import { useParams, useLoaderData } from "react-router";
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
  poemId: number
}
interface Poems {
  array: Array<Poem>;
}

const PoemHolder = ({ poemsData, poemId }: Props) => {
 // const [currentPoemData, setCurrentPoemData] = useState<Array<Poem>>([]);
  /*const { id } = useParams();
  const currentPoemId = Number(id);*/
 // const npoemsData: Poem = useLoaderData();

  //console.log(currentPoemId);
  console.log(poemsData);


  return (
    <>
      <div
        className="poemHolder mainContainer"
        style={{ backgroundImage: `url(${poemsData[poemId].picture})` }}
      >
        <div className="shadow position-relative p-3 pt-5 p-lg-5 ">
          <h3
            className="poemTitle"
            dangerouslySetInnerHTML={{ __html: poemsData[poemId].title }}
          ></h3>
          <p
            className={
              poemsData[poemId].underTitle ? "poemUnderTitle" : "d-none"
            }
            dangerouslySetInnerHTML={{
              __html: poemsData[poemId].underTitle,
            }}
          ></p>
          <p
            className="poemFontSizing italics pt-1 pt-lg-3 pb-1 pb-lg-4 "
            dangerouslySetInnerHTML={{
              __html: poemsData[poemId].authors,
            }}
          ></p>
          <p
            className="poemFontSizing poemContents lh-base fw-bolder"
            dangerouslySetInnerHTML={{
              __html: poemsData[poemId].contents,
            }}
          ></p>
        </div>
      </div>
    </>
  );
};
export default PoemHolder;