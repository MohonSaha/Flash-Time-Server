import { CategoryControllers } from './category.controller'
import express from 'express'

const router = express.Router()

router.post(
  '/create-category',
  //   auth(USER_ROLE.admin),
  //   validateRequest(CourseValidations.createCourseValidationSchema),
  CategoryControllers.createCategory,
)

router.get('/all-categories', CategoryControllers.getAllCategories)

router.get(
  '/:id',
  // auth(USER_ROLE.admin),
  // validateRequest(CourseValidations.updateCourseValidationSchema),
  CategoryControllers.getSingleCategory,
)

export const CategoryRoutes = router
