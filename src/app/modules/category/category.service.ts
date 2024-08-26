import httpStatus from 'http-status'
import AppError from '../../error/appError'
import { ICategory } from './category.interface'
import { Category } from './category.model'

const createCategoryIntoDB = async (payload: ICategory) => {
  // const { categoryId } = payload

  // Check category validation
  // const isCategoryExist = await Category.findById(categoryId)
  // if (!isCategoryExist) {
  //   throw new AppError(
  //     httpStatus.BAD_REQUEST,
  //     'Category does not exist in database',
  //   )
  // }

  const result = await Category.create(payload)
  return result
}

const getCategoriesFromDB = async () => {
  const result = await Category.find()
  return result
}

const getSingleCategoryFromDB = async (id: string) => {
  const categoryData = await Category.findById(id)
  if (!categoryData) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Category with the given id was not found!',
    )
  }

  return categoryData
}

export const CategoryServices = {
  createCategoryIntoDB,
  getCategoriesFromDB,
  getSingleCategoryFromDB,
}
