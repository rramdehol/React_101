function GoogleCity(props){
	return(
		<div>
			<table border="1">
				<tr>
					<td>{props.cityObject.city}</td>
					<td>{props.cityObject.cityRank}</td>
				</tr>
			</table>		
		</div>
	)
}


var Cities = React.createClass({
	render:function(props){
		var cityRows = [];
		var cityArray = this.props.cities.map(function(currentCity, index){
			console.log(currentCity.city);
			cityRows.push(<GoogleCity cityObject={currentCity} key={index}/>)
			// return (city.city);
		}); 
		// console.log(cityArray);
		return (
			<h1>{cityRows}</h1>
		)
	}
});


// This is the conponent call
ReactDOM.render(<Cities cities={cities}/>, document.getElementById("cities-container"))