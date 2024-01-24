import {useState} from "react";

export const useFetching = (callback: any): any =>{
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const fetching = async(...args: any): Promise<void> =>{
    try{
      setIsLoading(true)
      await callback(...args)
    } catch (e){
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }
  return [fetching, isLoading, error]
}