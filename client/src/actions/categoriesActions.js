import axios from 'axios'
import { getCategoriesRequest, createCategoryRequest, uploadCategoryImagerequest } from 'api/categories'
import { asyncUpdateCategories } from 'store/authSlice'
import { SERVER_URI } from 'config'
import store from 'store'


export const createCategory = async (form) => {
    return await createCategoryRequest(form)
}
export const uploadCategoryImage = async (image) => {
    return await uploadCategoryImagerequest(image)
}

export async function getCategories() {
    return await getCategoriesRequest();
}

export const GetCategory = async (id) => {
    try {
        const { data } = await axios.get(`${SERVER_URI}/api/category/${id}`,)
        return data
    } catch (e) {
        console.log(e)
    }

}

export async function addCategory(categoryId) {
    const categoryIds = [categoryId]
    store.dispatch(asyncUpdateCategories({ categoryIds, action: 'add' }))
}

export async function addCategories(categoryIds) {
    store.dispatch(asyncUpdateCategories({ categoryIds, action: 'add' }))
}

export async function removeCategory(categoryId) {
    const categoryIds = [categoryId]
    store.dispatch(asyncUpdateCategories({ categoryIds, action: 'remove' }))
}

export async function removeCategories(categoryIds) {
    store.dispatch(asyncUpdateCategories({ categoryIds, action: 'remove' }))
}

export function toggleCategoryState(categoryId) {
    const categoryIds = [categoryId]
    store.dispatch(asyncUpdateCategories({ categoryIds, action: 'toggle' }))

}

export function setAllCategoriesActive() {
    store.dispatch(asyncUpdateCategories({ action: 'allActive' }))
}