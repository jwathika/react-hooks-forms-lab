function Filter({ handleSearch, onCategoryChange, search }) {
	// const handleSearch = (e) => {
	// 	search(e.target.value);
	// };
	return (
		<div className='Filter'>
			<label htmlFor='search'>Search:</label>
			<input
				id='search'
				type='text'
				onChange={handleSearch}
				value={search}
				placeholder='Search...'
			/>
			<label htmlFor='filter'>Filter by category:</label>
			<select id='filter' name='filter' onChange={onCategoryChange}>
				<option value='All'>All</option>
				<option value='Produce'>Produce</option>
				<option value='Dairy'>Dairy</option>
				<option value='Dessert'>Dessert</option>
			</select>
		</div>
	);
}

export default Filter;
