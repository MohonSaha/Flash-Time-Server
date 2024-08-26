import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { CategoryServices } from './category.service'

const createCategory = catchAsync(async (req, res) => {
  const result = await CategoryServices.createCategoryIntoDB(req.body)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Category created successfully',
    data: result,
  })
})

const getAllCategories = catchAsync(async (req, res) => {
  const result = await CategoryServices.getCategoriesFromDB()

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Categories retrived successfully',
    data: result,
  })
})

const getSingleCategory = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await CategoryServices.getSingleCategoryFromDB(id)

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Single category retrived successfully',
    data: result,
  })
})

export const CategoryControllers = {
  createCategory,
  getAllCategories,
  getSingleCategory,
}
