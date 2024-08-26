import { Router } from 'express'
import { CourseRoutes } from '../modules/course/course.route'
import { AuthRoutes } from '../modules/auth/auth.route'
import { CategoryRoutes } from '../modules/category/category.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/',
    route: CourseRoutes,
  },
  {
    path: '/category',
    route: CategoryRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
]

// router.use('/', CourseRoutes)  => Aboid this code repeatation and use loop
moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
