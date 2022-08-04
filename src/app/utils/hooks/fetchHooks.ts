import { useEffect, useCallback } from 'react';

import { setAnimePage } from '../../containers/HomePage/homePageSlice';
import { useAppDispatch } from '../../hooks';
import animeService from '../../services/animeService';

export const useFetchAnimePage = (page: number, perPage: number) => {
  const dispatch = useAppDispatch()

  const fetchPage = useCallback(async () => {
    const animePage = await animeService.getAnimePage(page, perPage).catch((err) => {
      console.log("Error: ", err)
    })

    if (animePage) dispatch(setAnimePage(animePage))
    
  }, [dispatch])

  useEffect(() => {
    fetchPage()
  }, [fetchPage])  
}