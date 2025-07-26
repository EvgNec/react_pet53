import { Component } from 'react'

class Search extends Component {
	state = {
		value: '',
	}

    handleChange = (e) => {
		const { target } = e
		const { value } = target
		this.setState({ value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.handleSearch(this.state.value)
	}

	render() {
		return (
			<>
				<form
					role='search'
					onSubmit={this.handleSubmit}
				>
					<input
						type='search'
						placeholder='Search'
						aria-label='Search'
						onChange={this.handleChange}
						value={this.state.value}
					/>
					<button  type='submit'>
						Search
					</button>
				</form>
			</>
		)
	}
}

export default Search