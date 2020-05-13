import React from 'react'

export default function SearchResult({ content, type, search }) {
	return (
		<div className="search-result" onClick={() => search && search(content)}>
			{content}
		</div>
	)
}
