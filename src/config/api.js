import axiosClient from './axiosClient';

const apiCalls = {
    getTours: () => {
        return axiosClient.get(`tours`);
    },
    getExplore: () => {
        return axiosClient.get(`explore`);
    },
    getCities: () => {
        return axiosClient.get(`cities`);
    },
    getHotels: () => {
        return axiosClient.get(`hotels`);
    },

    getHotelDetails: (id) => {
        return axiosClient.get(`hotels/${id}`);
    },
    
    getpopularFilters: () => {
        return axiosClient.get(`popularFilters`);
    },
    getPropertyTypes: () => {
        return axiosClient.get(`PropertyTypes`);
    },
    getBudget: () => {
        return axiosClient.get(`Budget`);
    },
    getFacilities: () => {
        return axiosClient.get(`FacilitiesData`);
    },

}
export default apiCalls;