// From the snippet below extract the following components:
// - UserInfo
// - Avatar
// - Comment Body
// - Badges

// You may organize each however you want.
// I have not provided any data. Try and break it down without, 
// and add in some dummy datat when ready to test.
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo/>
      <CommentBody/>
      <Badges>
    </div>
  );
}

function UserInfo(props){
  <div className="UserInfo">
    <Avatar/>
    <div className="UserInfo-name">
      {props.author.name}
    </div>
  </div>
}
function Avatar(props){
  <img className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
  />
}
function CommentBody(props){
  <div className="Comment-body">
    <h1>{props.commentHeading}</h1>
    <div className="Comment-text">{props.text}</div>
    <div className="Comment-date">
      {formatDate(props.date)}
    </div>
  </div>
}

var Badges = React.createClass({
  render: function(){
    return(
      <div className="badge">{props.userBadge[0]}</div>
    )
  }
})

function Badges(props){
  <div className="UserBadges">
    <Badges/>
    <Badges/>
    <Badges/>
  </div>
}




