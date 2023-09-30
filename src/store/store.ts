import { defineStore } from 'pinia'

type ProductTypes = {
	name: string
	price: number
	size: string
	description: string
	color?: string
	material?: string
	imgs?: any
	id: any
}

interface StateTypes {
	catalog: Array<ProductTypes>
	shoppingCart: Array<ProductTypes['id']>
}

export const useStore = defineStore('store', {
	state: (): StateTypes => ({ catalog: [], shoppingCart: [] }),
	actions: {
		showState() {
			console.log(this.$state)
		},
	},
})
