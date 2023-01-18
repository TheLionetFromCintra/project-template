import axios from '@/api/axios'

export default async (data) => await axios('lite', {
    data,
    method: 'post'
})