import axios from 'axios';

class Api {
  static async getUserInfo(username){
    const response = await axios.get(`https://api.github.com/users/${username}`);

    console.log(response);
  }
}

// Api.getUserInfo('henriquepe');

const getInfoFromApi = async() => {
  console.log(Api.getUserInfo('henriquepe'));
  
}

getInfoFromApi();

