import axios from 'axios'

export function getRandomIntNumberBetween(min = 1, max = 10) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

// create our own axios server
export const api = axios.create({
	baseURL: 'https://unsplash.com',
	headers: {
		Authorization: 'Client-ID jwBcpjJEoz18O62MtRPk_BqyqQPNW2a1hVv8xO3FRYo',
	},
})

// Unsplash API KEY
// Access Key   jwBcpjJEoz18O62MtRPk_BqyqQPNW2a1hVv8xO3FRYo
// Secret key  cPAKJgYUN_rrG2o9bUVrTXf5SupZT9MAduEPazblaHY

// fetches data(get Image from unsplash)
export const getUnsplashImages = (term: string) => {
	return api.get('https://api.unsplash.com/search/photos', {
		params: {
			query: term,
		},
	})
}
