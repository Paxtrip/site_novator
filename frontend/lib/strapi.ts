import axios from 'axios';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const strapi = axios.create({
  baseURL: strapiUrl,
});

// Request interceptor for authorization
strapi.interceptors.request.use(
  (config) => {
    // Add authToken if needed
    const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
strapi.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// API functions
export const strapiAPI = {
  getCategories: () => strapi.get('/api/categories'),
  getCategory: (id) => strapi.get(`/api/categories/${id}`),
  getPages: () => strapi.get('/api/pages'),
  getPage: (id) => strapi.get(`/api/pages/${id}`),
  getNews: () => strapi.get('/api/news'),
  search: (query) => strapi.get(`/api/search?search=${query}`),
};

export default strapi;
