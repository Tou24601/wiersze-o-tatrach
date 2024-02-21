import { Link } from "react-router-dom";
import ListTitleAuthorHolder from "../components/ListTitleAuthorHolder";

interface Poem {
  id: number;
  title: string;
  underTitle: string;
  authors: string;
  contents: string;
  poemCredits: string;
  picture: string;
  pictureCredits: string;
  audio?: string;
}

interface Props {
  poemsData: Array<Poem>;
}

const CreditsList = ({ poemsData }: Props) => {
  return (
    <div><ul>
      {poemsData.map((item: Poem) => (
        <li key={item.id} className="textPadding">
          <Link
            to={`/${item.id.toString()}`}
            className="text-reset text-decoration-none"
          >
            <ListTitleAuthorHolder
              id={item.id}
              title={item.title}
              authors={item.authors}
            />{" "}
            <p className="lh-base">
              <span className="italics">Tekst:</span> {item.poemCredits}
            </p>
            <p className="lh-base">
              <span className="italics">Zdjęcie w tle:</span>{" "}
              {item.pictureCredits}
            </p>
          </Link>
        </li>
      ))}
    </ul>
    <br />
    <p className="poemFontSizing">Aplikacja: <a href="https://joannakolakowska.netlify.app/" className="text-reset text-decoration-none" target="_blank" rel="noreferrer">Joanna Kołakowska</a></p>
    </div>
  );
};

export default CreditsList;
