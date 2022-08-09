import UserInfo from "../containers/UserInfo";

function formatDate(date) {
  return date.toLocaleDateString();
}

export function Comment(props) {
  return (
    <div className="Comment" data-testid="Comment-component">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
