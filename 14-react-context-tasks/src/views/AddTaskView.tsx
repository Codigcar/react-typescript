import React from 'react'
import { FormLayout } from '../components/layout/FormLayout';

export const AddTaskView = () => {
    return (
        <div className="flex justify-center">
            <div className="bg-gray-900 w-6/12 ">
                {/* TaskForm  */}
                <FormLayout />
            </div>
        </div>
    )
}
