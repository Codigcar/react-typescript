import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import {  BiAlarmAdd } from 'react-icons/bi';

export const Heading = () => {
    return (
        <div>
            <div className="item-center bg-yellow-500 mb-10 flex justify-between ">
                <Link to="/">
                    <h5 className="font-bold text-2xl">  Task App</h5>
                </Link>
                <div>
                    <Link to="/add">
                        <Button variant="contained" color="primary">
                            <BiAlarmAdd /> 
                            Add Employee
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
