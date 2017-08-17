

class App extends React.Component{
	/* App contains all your states and is the control room */
		constructor() {
			super();
			this.state = {
				todos: [{text: 'learn angular', done: false, id: 1},
	            {text: 'write the content for the next module', done: false, id: 2},
	            {text: 'buy cheese', done: true, id: 3},
	            {text: 'buy milk', done: true, id: 4}]
			}
		}
		/* componentWillMount() {
			this.setState({todos: [
				{text: 'learn angular', done: false, id: 1},
	            {text: 'write the content for the next module', done: false, id: 2},
	            {text: 'buy cheese', done: true, id: 3},
	            {text: 'buy milk', done: true, id: 4}
			]})
		} */

		toggleDone(id){
			console.log(id.target.name)

			// create a copy of the array in state you want to change
			let newToDos = Array(this.state.todos);
			
			// change that copy of the array
			for(let i=0; i<newToDos[0].length; i++){
				console.log(newToDos[0][i].text); 
				if (newToDos[0][i].id == id.target.name){

					newToDos[0][i].done = !newToDos[0][i].done;
					console.log(newToDos[0][i])
				
				}
					
					// then do setState({todos: newCopy})

				}
				console.log(newToDos[0])
					this.setState({
					todos: newToDos[0]
				})
				
			}


		newTaskHandler(e,textFromAddTask){
			e.preventDefault();
			if (textFromAddTask === ''){
				alert("Please write a task name.")
			}
			else {
				this.setState({
					todos: this.state.todos.concat(
						[{
								text: textFromAddTask, 
								done:false, 
								id: (this.state.todos.length + 1)
							}])
				})
			}
		}

		checkBoxHandler(e){
			this.setState({
				
			})
		}


	render() {
		return(
			<div className="container">
				<AddItem addItemProp={this.newTaskHandler.bind(this)} />
				<Todo todoProp={this.state.todos} checkBoxHandlerProp={this.checkBoxHandler.bind(this)} toggleDoneProp={this.toggleDone.bind(this)} />

			</div>
		)
	}
}



class Todo extends React.Component {
	render() {
		console.log(this.props);
		let listItems;
		if(this.props.todoProp) {
			listItems = this.props.todoProp.map(item => {
			return(
				<ListItemConstructor listItemProp={item} toggleDoneProp2 ={this.props.toggleDoneProp} />
			);
			});
		}
	
	return (
		<div>
			{listItems}
		</div>
		)
	}
}

class ListItemConstructor extends React.Component {
	render(){
		

		return (
			<div>
				<li className= 'ListItem'>
					{this.props.listItemProp.text}
					<input type="checkbox" onClick={this.props.toggleDoneProp2} name={this.props.listItemProp.id} value={this.props.listItemProp.done} checked={this.props.listItemProp.done} />
				</li>
			</div>
		);
	}
}


class AddItem extends React.Component {
	render(){
		return(
			<div className='AddItem'>
				<h1> Add Task </h1>
				<form onSubmit = { (e) => {
					this.props.addItemProp(e, this.refs.addItemInput.value)
					} }>
					<div>
						<input type='text' ref='addItemInput'/>
						<input type='submit' value='Submit' />
					</div>
				</form>
			</div>
		)
	}
}



//<Todo propName={propValue} />
ReactDOM.render(<App />, document.getElementById('app'));