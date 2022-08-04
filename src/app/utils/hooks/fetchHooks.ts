import { useEffect, useCallback } from 'react';

import { setAnimePage } from '../../containers/HomePage/homePageSlice';
import { useAppDispatch } from '../../hooks';
import animeService from '../../services/animeService';

export const useFetchAnimePage = () => {
  const dispatch = useAppDispatch()

  const fetchPage = useCallback(async () => {
    const animePage = await animeService.getAnimePage(0).catch((err) => {
      console.log("Error: ", err)
    })

    if (animePage) dispatch(setAnimePage(animePage))
    
  }, [dispatch])

  useEffect(() => {
    fetchPage()
  }, [fetchPage])  
}