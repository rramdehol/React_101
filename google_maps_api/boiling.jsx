// Two Utility Functions to convert c->f, and f->c
function toCelcius(f){
	return ((f-32)*5/9);
}

function toFarenheit(c){
	return (c*9/5)+32;
}
// Make Another Utlity function that tries the conversion
// If it can returns the conversion rounded 
// If it can;t returns an empty string
function tryConvert(value, tUnit){
	var tryNumber = Number(value);
	if(isNaN(tryNumber)){
		// this is NOT a valid number 
		return "";
	}
	else{
		// this is a valid number
		if(tUnit === "c"){
			var convertedNumber = toFarenheit(tryNumber);
		}
		else{
			var convertedNumber = toCelcius(tryNumber);
		}
		return convertedNumber;
	}
}

console.log(tryConvert(100,"f"));
console.log(tryConvert(0,"c"));

function BoilingVerdict(props){
	if(props.celcius >= 100){
		return(
			<p>The water will boil at {props.celcius}</p>
		)
	}
	else{
		return(
			<p>The water would not boil at {props.celcius}</p>
		)
	}
}
var TemperatureInput = React.createClass({
	getInitialState: function() {
		return{
			value:" ",
		}
	},
	handleChange:function(event){
		// this.setState({
		// 	value: event.target.value
		// })
		this.props.onChange(event.target.value)
	},
	render:function(){
		var value = this.props.value;
		var tUnits = this.props.tUnits;
		return(
			<div>
				<label> Enter Temperature in question in {tUnits}</label>
				<input value={value} placeholder="Temp" onChange={this.handleChange}/>
			</div>
		)
	}
})

var Calculator = React.createClass({
	getInitialState: function() {
		return {
			scale: "c",
			value: 0,
		}
	},
	handleCelciusChange: function(value){
		this.setState({
			scale: "c",
			value: value,
		})
	},
	handleFarenheitChange: function(value){
		this.setState({
			scale: "f",
			value: value,
		})
	},
	render: function(){
		// var userEnteredTemp = this.state.value;
		var scale = this.state.scale;
		var value = this.state.value;
		if(this.state.scale == "c"){
			var fTemp = tryConvert(value, "c");
			var cTemp = value;
		}
		else if(this.state.scale == "f"){
			var fTemp = value;
			var cTemp = tryConvert(value, "f");
		}
		return(
			<div>
				<TemperatureInput tUnits="Celcius" value={cTemp} onChange={this.handleCelciusChange}/>
				<TemperatureInput tUnits="Farenheit" value={fTemp} onChange={this.handleFarenheitChange}/>
				<BoilingVerdict celcius={value}/>
			</div>
		)
	}
})



ReactDOM.render(<Calculator/>, 
	document.getElementById("boiling-container")
)