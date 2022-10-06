import axios from "axios";

export const getPosts= async limit => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getPostByIds = async id => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      return response.data
    } catch (error) {
      console.log(error)
    }
}