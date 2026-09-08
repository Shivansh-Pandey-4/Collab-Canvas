import React from "react";


interface IModel {
    children: React.ReactNode;
}


export default function Model(props: IModel) {

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-brightness-20">
            <div className="border border-gray-600 max-w-lg w-full py-3 px-5 rounded-md bg-black">
                {
                    props.children
                }
            </div>
        </div>
    )
}