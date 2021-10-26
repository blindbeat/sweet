import axios from 'axios'
import { SERVER_URI } from 'config'
import { createEventRequest, uploadEventImageRequest } from "api/events"

export const GetEvents = async (currentPage) => {
    try {
        const response = await axios.get(`${SERVER_URI}/api/event`, {
            params: {
                page: currentPage,
            }
        })
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export async function createEvent(form) {
    return await createEventRequest(form)
}

export async function uploadEventImage(image) {
    return await uploadEventImageRequest(image)
}


export const GetEvent = async (id) => {
    try {
        const response = await axios.get(`${SERVER_URI}/api/event/${id}`)
        return response
    }
    catch (e) {
        console.log(e)
    }
}