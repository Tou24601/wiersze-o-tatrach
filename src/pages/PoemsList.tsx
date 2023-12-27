import { Link } from "react-router-dom";
import ListTitleAuthorHolder from "../components/ListTitleAuthorHolder";

interface Poem {
  id: number;
  title: string;
  underTitle: string;
  authors: string;
  audio?: string;
}

interface Props {
  poemsData: Array<Poem>;
}

const PoemsList = ({ poemsData }: Props) => {
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
              />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PoemsList;
