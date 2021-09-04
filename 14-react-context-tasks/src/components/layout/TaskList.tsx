import React, { useContext } from 'react'
import { GlobalContext } from '../../stateManagement/context/GlobalContext'
import Button from '@material-ui/core/Button';


export const TaskList = () => {
    const context = useContext(GlobalContext);
    console.log('context: ', context);

    return (
        <div className="flex justify-center">
            <div className="w-6/12">
                {
                    context.tasks.map(task => (
                        <div className="bg-gray-900 shadow-2xl mb-4 p-10 flex justify-between rounded" key={task.id}>
                            <div>
                                <h1>{task.title}</h1>
                                <h6>{task.id}</h6>
                            </div>
                            <div>
                                <Button variant="outlined" color="primary">
                                    Edit
                                </Button>
                                <Button variant="outlined" color="primary">
                                    Eliminate
                                </Button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
