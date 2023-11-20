
interface Props {
    id: number,
    title: string,
    authors: string
}

const ListTitleAuthorHolder = ({id, title, authors}: Props) => {
    return               <h4 className="pointer pt-4 lh-base">
    {id + 1}. <span className="italics">{title}</span>,{" "}
    {authors}
  </h4>
}

export default  ListTitleAuthorHolder;