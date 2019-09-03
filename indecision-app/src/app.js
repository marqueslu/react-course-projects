class Header extends React.Component {
	render(){
		return (
			<div>
				<h2>Indecision</h2>
				<h2>Put your life in the hands of a computer</h2>
			</div>
		)
	}
}

class Action extends React.Component {
	render(){
		return (
			<div>
				<button>What should I do?</button>
			</div>
		)
	}
}

class Options extends React.Component{
	render(){
		return (
			<div>
				<ul>
					<li>List</li>
					<li>List</li>
				</ul>
			</div>
		)
	}
}

class AddOption extends React.Component{
	render(){
		return (
			<div>
				<input type="text" />
				<button>Add Option</button>
			</div>
		)
	}
}

const jsx = (
	<div>		
		<Header />
		<Action />
		<Options />
		<AddOption />
	</div>
)
ReactDOM.render(jsx, document.getElementById('app'));