import React,{useContext,useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'


function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    console.log(params);
  return (
    <div>DetailProduct</div>
  )
}

export default DetailProduct