import React from 'react'
import SearchResult from './SearchResult';

export default function Results({ results, search }) {
	return (
		[
			<p className="m-2">Results for "{results.query}" </p>,
			results.items.map(result =>
				<SearchResult content={result} search={search} />
			)
		]
	)
}
