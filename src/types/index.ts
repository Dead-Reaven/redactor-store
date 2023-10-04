type ProductTypes = {
  name: string
  price: number
  size: string
  description: string
  color?: string
  material?: string
  imgs?: any
  id: any
  // delete later
  title: string
}

type CatalogTypes = Array<ProductTypes>
type ShoppingCardTypes = Array<ProductTypes['id']>

export type { ProductTypes, CatalogTypes, ShoppingCardTypes }
