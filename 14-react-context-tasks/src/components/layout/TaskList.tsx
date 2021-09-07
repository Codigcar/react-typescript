import React, { useContext } from 'react'
import { GlobalContext } from '../../stateManagement/context/GlobalContext'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



export const TaskList = () => {
    const context = useContext(GlobalContext);
    console.log('context TaskList: ', context);

    return (
        <div className="flex justify-center">
            <Button variant="outlined" color="primary" onClick={() => context.deleteAllTask()}>
                Delete All
            </Button>
            <div className="w-6/12">
                {
                    context.tasks.map((task: any, index: any) => (
                        <div className="bg-gray-900 shadow-2xl mb-4 p-10 flex justify-between rounded" key={task.id}>
                            <div>
                                <h6>{task.id}</h6>
                                <h1>{task.title}</h1>
                                <h1>{task.description}</h1>
                                <Button variant="contained" color="primary" onClick={() => context.toggleTaskDone(task.id)}>
                                    {task.done ? 'undone':'done'}
                                </Button>
                            </div>
                            <div>
                                <Link to={`/edit/${task.id}`}>
                                    <Button variant="outlined" color="primary">
                                        Edit
                                    </Button>
                                </Link>

                                <Button variant="outlined" color="primary" onClick={() => context.deleteTask(task.id)}>
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
