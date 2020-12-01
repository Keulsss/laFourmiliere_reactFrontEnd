import http from "./httpService";
import {
  categoriesUrl
} from "../config"

function categoryUrl(id) {
  return `${categoriesUrl}/${id}`
}

export function getCategories() {
  return http.get(categoriesUrl)
}

export function getCategory(categoryId) {
  return http.get(categoryUrl(categoryId))
}

export function saveCategory(category) {
  if (category.id) {
    const body = {
      ...category
    }
    delete body.id
    return http.put(categoryUrl(category.id), body)
  }

  return http.post(`${categoryUrl}`, category)
}

export function deleteCategory(categoryId) {
  return http.delete(categoryUrl(categoryId))
}