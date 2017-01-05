function Application(props){
	// Capital letters in react means components
	// Components return a single virtual DOM element
	return (
		// {} Time to write some JavaScript
		<div className = "application">
			<h1>{props.title}</h1>
			{props.message}
		</div>
	)
}
ReactDOM.render(
	// This is the component call
	<Application message="Hello World" title = "React Day"/>,
	document.getElementById("container")
	)
