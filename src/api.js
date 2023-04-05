import axios from "axios";
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID wpRefT6vmaovd1FhsJqS3dwRlpktOTYcW4lgB7IxUQo'
        },
        params: {
            query: term
        }
    })
    return response.data.results;
}
export default searchImages;