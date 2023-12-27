import { useParams } from "react-router";

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
  const { id } = useParams();
  const currentPoemId = Number(id);
  let data = require(`../data/data.json`);

  return (
    <>
      <div
        className="poemHolder mainContainer"
        style={{ backgroundImage: `url(${data.poems[currentPoemId].picture})` }}
      >
        <div className="shadow position-relative p-3 pt-5 p-lg-5 ">
          <h3
            className="poemTitle"
            dangerouslySetInnerHTML={{
              __html: data.poems[currentPoemId].title,
            }}
          ></h3>
          <p
            className={
              data.poems[currentPoemId].underTitle ? "poemUnderTitle" : "d-none"
            }
            dangerouslySetInnerHTML={{
              __html: data.poems[currentPoemId].underTitle,
            }}
          ></p>
          <p
            className="poemFontSizing italics pt-1 pt-lg-3 pb-1 pb-lg-4 "
            dangerouslySetInnerHTML={{
              __html: data.poems[currentPoemId].authors,
            }}
          ></p>
          <p
            className="poemFontSizing poemContents lh-base fw-bolder"
            dangerouslySetInnerHTML={{
              __html: data.poems[currentPoemId].contents,
            }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default PoemPage;
