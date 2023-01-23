import axios from 'axios';
import Store from '@/store';
import getUser from './getUser';

const api = axios.create({
    withCredentials: true,
})

function apiCaller(path, options = {}, index = 0) {
    const {
        data = {},
        params = {},
        method = 'get',
        // showLoader = true
    } = options;

    if (method === 'post') {
        data.csrf = Store.getters['app/csrf'];
    }

    return new Promise((resolve, reject) => {
        // showLoader && Store.commit('app/load', true);

        api({
            url: `/api/${path}`,
            method,
            data,
            params
        }).then(async ({ data }) => {
            const { csrf, code_value } = data

            Store.commit('app/update', { csrf, code_value });

            resolve(data);
        }).catch(async (e) => {
            if (e.response?.status === 412 && index < 3) {
                try {
                    await getUser();
                    const result = await apiCaller(path, options, ++index);
                    resolve(result)
                } catch (e) {
                    // Store.commit('error/showError');
                    reject(e)
                }
            } else {
                // Store.commit('error/showError');
                reject(e)
            }
        }).finally(() => {
            // Store.commit('application/load', false);
        })
    })
}

export default apiCaller;

export { api };