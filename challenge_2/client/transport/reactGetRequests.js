import axios from 'axios';

const getApiData = (context, startDate, endDate, isPageLoad) => {
  axios(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
  .then(response => {
    console.log('Success!', response);
    if (isPageLoad) {
      context.setState({ initApiData: response.data.bpi });
    }
    context.setState({ apiData: response.data.bpi });
  }).then(results => {
    context.renderChart();
  })
  .catch(error => {
    console.error('Error', error);
    return null;
  });
};

export default getApiData;