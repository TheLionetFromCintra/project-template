import axios from './axios'

export default async (data, showLoader = true) => await axios('savepas', {
data,
method: 'post',
showLoader
})