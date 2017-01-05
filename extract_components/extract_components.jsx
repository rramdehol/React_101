// From the snippet below extract the following components:
// - UserInfo
// - Avatar
// - Comment Body
// - Badges

// You may organize each however you want.
// I have not provided any data. Try and break it down without, 
// and add in some dummy datat when ready to test.


// USERINFO COMPONENT
function UserInfo(props){
	return(
  		<Avatar/>
  		<UserInfoName/>
	)

}
// AVATAR COMPONENT
function Avatar(props){
	return(
	<img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
    />
	)
}
// COMMENTBODY COMPONENT
function CommentBody(props){
	return(
	<div className="Comment-body">
        <h1>{props.commentHeading}</h1>
        <CommentText/>
        <CommentDate/>
     </div>
	)
}
// COMMENT TEXT COMPONENT
function CommentText(){
	return (
		<div className="Comment-text">{props.text}</div>
	)
}
// COMMENT DATE COMPONENT
function CommentDate(){
	return (
		<div className="Comment-date">
          {formatDate(props.date)}
        </div>
	)
}
// USERBADGES COMPONENT
function UserBadges(props){
	return(
		<Badge/>
		<Badge/>
		<Badge/>
	)
}
// BADGE Component
function Badge(){
	<div className="badge">{props.userBadge[0]}</div>
}

// APPLICATION Component
function Comment(props){
	return(
		<UserInfo/>
		<CommentBody/>
		<UserBadges/>
	)
}
ReactDOM.render(<Comment/>,
	document.getElementById("container")
	)














