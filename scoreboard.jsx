// Lets break it up into pieces
// The app in components is
// 1.header 
// 2.Several Teams 
// 3.Each team has a counter

var teams = [
	{
		name: "Alabama",
		score: 0,
		mascot: "Crimson Tide"
	},
	{
		name: "CLEMSON",
		score: 0,
		mascot: "Tigers"
	},
]




// HEADER COMPONENT
function Header(props){
	return(
		<div className = "header" >
			{/* to get the title we add props object and call title property*/}
			<h1>{props.title}</h1>
		</div>
	)
}

// TEAM COMPONENT
function Team(props){
	return(
	<div className = "teams">
		<div className = "team-name">{props.name}</div>
		<Counter score = {props.score} />
	</div>
	)
}

// React.createClass is a React component class that takes and object 
// The only REQUIRED property is a render method
// Every time state changes render gets called
var Counter = React.createClass(
	{
	// We also need to add the initialState property that is part of React
	getInitialState: function() {
		// this function sets the intial state of a variable
		// it usually returns a single object
		return {
			score: 0
		}
	},
	losePoint: function(){
		console.log("You clicked on the down button")
		// setState is a special React function that updates the state\
		this.setState({
			score: (this.state.score -1)
		})
	},
	gainPoint: function(){
		console.log("You clicked on the up button")
		// setState is a special React function that updates the state\
		this.setState({
			score: (this.state.score +1)
		})
	},
	render: function(){
		return(
		<div className = "counter">
			<button onClick= {this.gainPoint} className = "counter-change-plus">+</button>
			{/* Change the score from this.props.score to state*/}
			<div className = "team-score">{this.state.score}</div>
			<button onClick= {this.losePoint} className = "counter-change-minus">-</button>
		</div>
		)
	}
});	

function Application(props){
	// Components return a virtual DOM
	return(
		<div className = "scoreboard">
	{/* className is exclusively for styling*/}
			{/* Using Map to loop through our Teams JSON this is unecessary*/}
			<Header title={props.title}/>
			{/*// <Team name="Alabama" score="0"/>*/}
			{/*// <Team name="Clemson" score="0"/>*/}
		{/* props.team is an array of objects*/}
		{/* return a component witht he current tema name*/}
		{/* () => {} is the ES6 way of writing an anonymous function*/}
			{props.teams.map((team, index)=>{
				console.log(team);
				console.log(index);
				return <Team key = {index} name={team.name} score={team.score}/>
			})}
		</div>
	)
}
// ReactDOM.render put a componet in the DOM
// It takes 2 parmeters 
// 1. the component to render
// 2. Where to render it

ReactDOM.render(<Application title="National Championship Scoreboard" teams = {teams}/>,
	document.getElementById("container")
)























