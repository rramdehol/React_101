var Application = React.createClass({
	getInitialState: function() {
		return{
			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
			a: 0
		}
	},
	flipToHeads:function(){
		console.log("Clicked the flip button")
		this.setState({
			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg',
			a: Math.floor((Math.random()*2))
		})
	},
	flipToTails:function(){
		console.log("Clicked the flip button again")
		this.setState({
			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
			a: Math.floor((Math.random()*2))
		})
	},

	render: function(){
		console.log(this.state.image);
		console.log(typeof(this.state.image));
		console.log(this.state.a);
		if(this.state.a === 0){
			console.log(this.state.a + "is 0");
		return(
			<div className="application">
				<button onClick = {this.flipToHeads}>Click to Flip</button>
				<div><img src={this.state.image} /></div>
			</div>
		)
		}
		if(this.state.a === 1){
			console.log(this.state.a + "is 1");
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

