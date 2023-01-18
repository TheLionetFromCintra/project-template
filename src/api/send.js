import axios from './axios'

export default async (data, showLoader = true) => await axios('contact', {
    data,
    method: 'post',
    showLoader
})