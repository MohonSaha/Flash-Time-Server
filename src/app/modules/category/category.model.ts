import { model, Schema } from 'mongoose'
import { ICategory, ISubCategory } from './category.interface'

const subCategorySchema = new Schema<ISubCategory>(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    _id: false,
  },
)

const categorySchema = new Schema<ICategory>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      unique: true,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    subCategory: {
      type: [subCategorySchema],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

export const Category = model<ICategory>('category', categorySchema)
