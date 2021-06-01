import axios from 'axios';

const CARS_API_URL = '/api/v1/cars';

export const cars = async () => {
  try {
    const { data } = await axios.get(CARS_API_URL);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const consumption = async (vehicle, distance, velocity) => {
  try {
    const { data } = await axios.get(`${CARS_API_URL}/${vehicle}/${distance}/${velocity}`);

    return {
      ...data,
      data1: data
    };
  } catch (error) {
    console.error(error);
  }
};

export const compare = async (vehicle, distance, velocity1, velocity2) => {
  try {
    const { data } = await axios.get(`${CARS_API_URL}/${vehicle}/${distance}/${velocity1}/${velocity2}`);
    return {
      ...data,
      data1: data.data_1 ? data.data_1 : data.data1,
      data2: data.data_2 ? data.data_2 : data.data2,
    };
  } catch (error) {
    console.error(error);
  }
};

const carService = {
  cars,
  consumption,
  compare,
};

export default carService;
