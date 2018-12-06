import axios from 'axios';

// Endpoints
// GET `http://localhost:3000/books?_page=${nextPageId}` // paginates by 10 events
// GET `http://localhost:3000/posts?q=${query}` // searches by query
// GET `http://localhost:3000/posts?q=${query}&_page=${nextPageId}` // searches by query and paginates by 10 events
// PUT `http://localhost:3000/books?_page=${nextPageId}` // paginates by 10 events
// PUT `http://localhost:3000/posts?q=${query}` // searches by query
// PUT `http://localhost:3000/posts?q=${query}&_page=${nextPageId}` // searches by query and paginates by 10 events

const getEvents = (context, query, pageNum) => {
  if(pageNum && query) {
    console.log('pageNum && query')
    axios.get(`http://localhost:3000/events?q=${query}&_page=${pageNum}`)
    .then((response) => context.setState({
        events: response.data,
        pageNum: pageNum,
        totalEvents: parseInt(response.headers['x-total-count'])
      })
    )
    .catch((err) => console.error('Error retrieving events:', err))
  } else if (pageNum && !query) {
    console.log('pageNum && !query')
    axios.get(`http://localhost:3000/events?_page=${pageNum}`)
    .then((response) => context.setState({
        events: response.data,
        pageNum: pageNum,
        totalEvents: parseInt(response.headers['x-total-count'])
      })
    )
    .catch((err) => console.error('Error retrieving events:', err))
  } else if(!pageNum && query) {
    console.log('pageNum && query')
    axios.get(`http://localhost:3000/events?q=${query}`)
    .then((response) => context.setState({events: response.data, pageNum: 1}))
    .catch((err) => console.error('Error retrieving events:', err))
  }
};

export default getEvents;