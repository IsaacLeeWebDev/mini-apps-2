import axios from 'axios';
// Endpoints
// GET `http://localhost:3000/books?_page=${nextPageId}` // paginates by 10 events
// GET `http://localhost:3000/posts?q=${query}` // searches by query
// GET `http://localhost:3000/posts?q=${query}&_page=${nextPageId}` // searches by query and paginates by 10 events
// PUT `http://localhost:3000/books?_page=${nextPageId}` // paginates by 10 events
// PUT `http://localhost:3000/posts?q=${query}` // searches by query
// PUT `http://localhost:3000/posts?q=${query}&_page=${nextPageId}` // searches by query and paginates by 10 events

const getRecordsByPage = (context, pageNum) => {
    axios.get(`http://localhost:3000/events?_page=${pageNum}`)
    .then((results) => context.setState({events: results.data, pageNum: 1}))
    .catch((err) => console.error('Error retrieving events:', err))
};

const getTotalPages = (context) => {
  axios.get('http://localhost:3000/events')
    .then((results) => {
      const totalEvents = Object.keys(results.data).length;
      const totalPages = Math.floor(totalEvents / 10) + (totalEvents % 10 !== 0 ? 1 : 0)
      context.setState({totalPages: totalPages})
    })
    .catch((err) => console.error('Error retrieving events:', err))
}

const getRecordsByQuery = (context, query, pageNum) => {
  // console.log('getRecordsByQuery context:', context);
  if(pageNum) {
    axios.get(`http://localhost:3000/events?q=${query}&_page=${pageNum}`)
    .then((results) => context.setState({events: results.data, pageNum: 1}))
    .catch((err) => console.error('Error retrieving events:', err))
  }
  axios.get(`http://localhost:3000/events?q=${query}`)
  .then((results) => context.setState({events: results.data, pageNum: 1}))
  .catch((err) => console.error('Error retrieving events:', err))
};
export default { getRecordsByQuery, getRecordsByPage, getTotalPages};