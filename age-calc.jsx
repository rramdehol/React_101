// Utility Function
function Year(props){
	return(
		<p>{props.age}</p>
	)
}


// Parent component manages state
var Calculator = React.createClass({
	getInitialState: function() {
		return{
			value:2016
		}
	},
	handleChange:function(event){
		this.setState({
			value: event.target.value
		})
	},
	render:function(){
		var age = calculate();
		return(
			<div>
				<form>
					<input type="text" placeholder="Birthyear" onChange ={this.handleChange}/>
					<input type="submit" placeholder="Click Me!" onChange ={this.handleChange}/>
					<Year age={this.state.value} value={this.age} />
				</form>
			</div>
		)
	}
})
ReactDOM.render(<Calculator/>, 
	document.getElementById("age-container")
)