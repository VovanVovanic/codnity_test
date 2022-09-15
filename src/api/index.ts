
import axios from "axios"
import { FormikErrorType } from "../modules/bookForm"
import { iArticle } from "../redux/articles/types"
import { IbookItem } from "../redux/books/types"


const instance = axios.create({
    baseURL: 'https://shielded-cove-11339.herokuapp.com'
})

export const getArticles = async (tag: string | null) => {
  let queryString = tag && tag !== "All" ? `?tag=${tag}`: ""
  const response = await instance.get<Array<iArticle>>(`/${queryString}`)
  return response.data
}

export const getBooks = async (type: string) => {
  const response = await instance.get<Array<IbookItem>>(`/books/:${type}`)
  return response.data
}

export const deleteBook = async (id: string) => {
  const response = await instance.delete<IbookItem>(`/books/:${id}`)
  return response.data
}

export const updateBook = async (id: string, data: FormikErrorType,) => {
  const response = await instance.patch<IbookItem>(`/books/:${id}`, {...data})
  return response.data
}

export const addBook = async (data: FormikErrorType,) => {
  const response = await instance.post<IbookItem>(`/book/`, {...data})
  console.log(response, "res")
  return response.data
}