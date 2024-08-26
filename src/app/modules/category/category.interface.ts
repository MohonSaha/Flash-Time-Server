export interface ISubCategory {
  name: string
  slug: string
  isDeleted?: boolean
}

export interface ICategory {
  name: string
  slug: string
  image: string
  color: string
  subCategory?: ISubCategory[]
}
