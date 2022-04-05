import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Loading } from './Loading';

import { useResultContext } from '../contexts/ResultContextProvider';

export const Results = () => {
  const {results, isloading, getResults, searchTerm, setSearchTerm} = useResultContext();
  const location = useLocation();

  if(isloading) return <Loading/>;
  console.group(location.pathname);

  switch (location.pathname) {
    case '/search':
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          
        </div>
      )
      case '/images':
      return 'SEARCH';
      case '/news':
      return 'SEARCH';
      case '/videos':
      return 'SEARCH';
    default:
      return 'ERROR';
  }
}
