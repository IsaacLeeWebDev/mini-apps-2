import axios from 'axios';

const updateEvents = (context, req) => {
  console.log(req);
  console.log(context);
  axios.put(`http://localhost:3000/events/${req.id}`, {
      date        : req.date,
      description : req.description,
      lang        : req.lang,
      category1   : req.category1,
      category2   : req.category2,
      granularity : req.granularity,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  .then(response => {
    console.log('Success!')
    context.setState({
      date        : response.data.date,
      description : response.data.description,
      lang        : response.data.lang,
      category1   : response.data.category1,
      category2   : response.data.category2,
      granularity : response.data.granularity,
      editMode    : false,
    });
  })
  .catch(error => console.error('Update failed. Error:', error));
};

export default updateEvents;