import { useEffect, useRef, useState } from "react"

export const useFetch = (url) =>{

    const [ state, setState ] = useState({data: null, loading: true, error: null});

    const isMounted = useRef(true);

    useEffect(()=>{

        return () =>{
            isMounted.current = false;
        }

    },[])

    useEffect(() =>{

        const getData = async () =>{

            try {

                setState({
                    data: null,
                    loading: true,
                    error: null
                });

                const response = await fetch( url );
                const parseData = await response.json();

                if(isMounted.current){

                    setState({
                        data: parseData,
                        loading: false,
                        error: null
                    });

                }else{
                    
                    console.log('la peticion no fue realizado debido a que cancelo');
                }
                
            } catch (error) {

                setState({
                    data: null,
                    loading: false,
                    error: 'Opps! ocurrio un error al obtener los datos'
                });
            }
            
        }

        getData();

    }, [url]);

    return state;

}