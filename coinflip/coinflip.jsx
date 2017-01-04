var Application = React.createClass({
	getInitialState: function() {
		return{
			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'
		}
	},
	flipToHeads:function(){
		console.log("Clicked the flip button")
		this.setState({
			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'
		})
	},
	flipToTails:function(){
		console.log("Clicked the flip button again")
		this.setState({
			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'
		})
	},

	render: function(){
		console.log(this.state.image);
		console.log(typeof(this.state.image));
		console.log(a);
		if(this.state.image === 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'){
		return(
			<div className="application">
				<button onClick = {this.flipToHeads}>Click to Flip</button>
				<div><img src={this.state.image} /></div>
			</div>
		)
		}
		if(this.state.image === 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'){
		return(
			<div className="application">
				<button onClick = {this.flipToTails}>Click to Flip</button>
				<div><img src={this.state.image} /></div>
			</div>
		)
		}
	}
});
ReactDOM.render(
	<Application imageSrc = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg' />, 
	document.getElementById('container')
);

