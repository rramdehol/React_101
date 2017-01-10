function Name(props){
	return(
		<p>{props.textToDisplay}</p>
	)
}
// This is the conponent call
var MyForm = React.createClass({
	getInitialState: function() {
		return{
			value: "Test",
		}
	},

	handleChange: function(event){
		console.log("Changed");
		this.setState({
			value: event.target.value,
		});
	},

	render:function(){
		return(
			<form>
				<label>Name:</label>
				<input type="text" placeholder= "Enter Your Name Here" onChange={this.handleChange}/>
				{/*value={this.state.value}*/}
				<Name textToDisplay={this.state.value}/>
			</form>
		)
	}
})

ReactDOM.render(<MyForm/>, 
	document.getElementById("form-container")
)