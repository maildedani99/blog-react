import React, { createContext, useEffect, useState } from 'react';

const IconsContext = createContext();
let { Provider, Consumer, icons } = IconsContext;

const IconsProvider = ({ children }) => {
    
    const [icons, setIcons] = useState (['']);

    const getIcons = () => {
      const url = 'http://localhost/api/icons';
      const options = {
        method: 'GET',
        headers: new Headers (),
      };
      fetch (url, options)
        .then (response => {
          if (response.status === 200) {
            return response.json ();
          }
          return Promise.reject (response.status);
        })
        .then (function (myJson) {
          setIcons (myJson);
        })
        .catch (error => console.log (error));
    };

    useEffect(() => {
        getIcons();
    }, []);

    

    return (
        <Provider value={ { icons, setIcons } } >
            {children}
        </Provider>
    )


}
export { IconsProvider, Consumer as IconsConsumer, IconsContext }
