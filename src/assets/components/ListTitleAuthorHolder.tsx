interface Props {
  id: number;
  title: string;
  authors: string;
}

const ListTitleAuthorHolder = ({ id, title, authors }: Props) => {
  return (
    <p className="pointer pt-4 lh-base fs-4">
      {id + 1}. <span className="italics">{title}</span>, {authors}
    </p>
  );
};

export default ListTitleAuthorHolder;
