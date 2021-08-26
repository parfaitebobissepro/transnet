export default ({$axios}, inject) => {
    inject('getProductList', async (params) => await $axios.get('cool_get_url', {
      params
    }))
    inject('createProduct', async (data) => await $axios.post('cool_post_url', data))
    // ... and so on
}