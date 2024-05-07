import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ items, onItemFormSubmit }) {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [searchValue, setSearchValue] = useState('');

	function handleCategoryChange(event) {
		setSelectedCategory(event.target.value);
	}

	const onSearchChange = (e) => {
		setSearchValue(e.target.value);
	};
	const itemsToDisplay = items
		// category
		.filter(
			(item) => selectedCategory === 'All' || item.category === selectedCategory
		)
		// search term
		.filter((item) =>
			item.name.toLowerCase().includes(searchValue.toLowerCase())
		);

	return (
		<div className='ShoppingList'>
			<ItemForm onItemFormSubmit={onItemFormSubmit} />
			<Filter
				handleSearch={onSearchChange}
				search={searchValue}
				onCategoryChange={handleCategoryChange}
			/>
			{itemsToDisplay.length === 0 ? (
				<p>No items available</p>
			) : (
				<ul className='Items'>
					{itemsToDisplay.map(({ id, name, category }) => (
						<Item key={id} name={name} category={category} />
					))}
				</ul>
			)}
		</div>
	);
}

export default ShoppingList;
