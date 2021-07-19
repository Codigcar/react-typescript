import React from 'react'
import { useState, useEffect } from 'react';
import { GifsAPI } from '../interface/GifsInterface';
import { getAllGifs } from '../api/getGifs';
import { useAxios } from '../hooks/useAxios';

interface Props {
    key:number;
    categoryName: string;
}

export const Gifs = (props:Props) => {

    const {gifsListFound, isLoading} = useAxios(props.categoryName);
   
    /* if(isLoading){
        return (
            <>
                <h3>Loading...</h3>
            </>
        )
    } */

    return (
        <> 
            {props.categoryName}
            {
                isLoading ? <h3>Loading...</h3> :
                <ol>
                    {
                        gifsListFound?.data.map(item => 
                            <img key={item.id} src={item.images.downsized_medium.url} alt={item.images.downsized_medium.url} />
                            )
                        }
                </ol>
            }
        </>
    )
}
