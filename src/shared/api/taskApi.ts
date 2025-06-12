import axios from "axios"

export const getTasks = async () => {
  const {data} = await axios.get('https://dummyjson.com/todos')
  return data.todos
}


