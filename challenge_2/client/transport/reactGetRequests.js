import axios from 'axios';

const getApiData = (context) => {
  axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2018-12-5',
  {
    headers: {
      'Access-Control-Allow-Origin': 200,
    }
  })
  .then(response => {
    console.log('Success!', response);
    context.setState({ apiData: response.data });
  })
  .catch(error => {
    console.error('Error', error);
    return null;
  });
}

export default getApiData;