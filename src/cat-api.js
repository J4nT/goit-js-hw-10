import axios from "axios";


axios.defaults.headers.common["x-api-key"] = "live_pPotW9njWFT46nugNZpjEp1mH16YSfZGDNQTahWMK8jQsH9C2BAwiAC1WT6Xelym";
const apiGet='https://api.thecatapi.com/v1/breeds';

// Make a request for a user with a given ID
const fetchBreeds = () => {
    return axios
        .get(apiGet)
        .then(response => response.data)
        .catch (error => {throw error;});
};
export const fetchCatByBreed = (breedId) => {
  return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
