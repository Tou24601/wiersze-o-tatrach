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
    <ul>
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
              <b>Tekst:</b> {item.poemCredits}
            </p>
            <p className="lh-base">
              <b>Zdjęcie w tle:</b> {item.pictureCredits}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CreditsList;
