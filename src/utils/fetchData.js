import axios from 'axios';
import mockConfirmed from './mockdata/mockConfirmed.json';
import mockDeaths from './mockdata/mockDeaths.json';
import mockRecovered from './mockdata/mockRecovered.json';

const url = 'https://coronavirus-tracker-api.herokuapp.com';

const mockData = true;

export const getConfirmed = async () => {
  if (!mockData) {
    try {
      const res = await axios.get(`${url}/confirmed`);
      console.log('fetch confirmed success');
      return res.data;
    } catch (err) {
      console.error(err.message);
    }
  }
  console.log('using mock data!');
  return mockConfirmed;
};

export const getDeaths = async () => {
  if (!mockData) {
    try {
      const res = await axios.get(`${url}/deaths`);
      console.log('fetch deaths success');
      return res.data;
    } catch (err) {
      console.error(err.message);
    }
  }
  console.log('using mock data!');
  return mockDeaths;
};

export const getRecovered = async () => {
  if (!mockData) {
    try {
      const res = await axios.get(`${url}/recovered`);
      console.log('fetch recovered success');
      return res.data;
    } catch (err) {
      console.error(err.message);
    }
  }
  console.log('using mock data!');
  return mockRecovered;
};
