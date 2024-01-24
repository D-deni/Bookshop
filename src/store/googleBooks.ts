import axios from "axios";

export default class GoogleBooks {
  static async getAll(limit = 10, page = 1): Promise<any>{
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=%22subject:Business%22&key=AIzaSyA9fYC4EAN7rExCToPYPOKGZZ0elTe1lN8&printType=books&startIndex=0&maxResults=${limit}&langRestrict=en%27`, {})
    return res
  }
}