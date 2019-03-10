import axios from "axios";

exports.handler = (event, context, callback) => {

  const fetchProjects = async () => {
	try {
	  const res = await axios({
		method: 'GET',
		url: 'https://behance.net/v2/users/judecodes/projects?client_id=jZEFONxNhZytuKnjJnOiZChVxurwaa40'
	  });
	  callback(null, {
		statusCode: 200,
		body: JSON.stringify(res.data),
		headers: {
		  'Access-Control-Allow-Origin': '*',
		  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		}
	  })
	} catch (e) {
	  callback(null, {
		statusCode: 500,
		body: JSON.stringify(e),
		headers: {
		  'Access-Control-Allow-Origin': '*',
		  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		}
	  })
	}
  };

  if (event.httpMethod === 'GET') fetchProjects();
};