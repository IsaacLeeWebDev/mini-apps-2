import axios from 'axios';

const getApiData = (context) => {
  axios('https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-01-01&end=2018-12-05')
  .then(response => {
    console.log('Success!', response);
    context.setState({ apiData: response.data.bpi });
  }).then(results => {
    context.renderChart();
  })
  .catch(error => {
    console.error('Error', error);
    return null;
  });
}

export default getApiData;