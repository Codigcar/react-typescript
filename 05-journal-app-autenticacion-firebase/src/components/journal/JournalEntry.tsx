import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="flex mb-5 text-black bg-gray-300 border rounded cursor-pointer">
            <div className="w-36" style={{backgroundSize:'cover', backgroundImage:'url(https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg)'}}>
            </div>
            <div className="flex-col py-3 pl-3">
                <div className="text-lg font-bold">
                    Title
                </div>
                <div className="text-base">
                    Parafrase escribo aqui para ver omo 
                </div>
            </div>
            <div className="flex flex-col items-center justify-center p-3 text-base">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
