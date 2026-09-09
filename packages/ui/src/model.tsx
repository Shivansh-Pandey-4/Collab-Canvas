import React from "react";


interface IModel {
    children: React.ReactNode;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    clearInputFun?: React.Dispatch<React.SetStateAction<string>>
}


export default function Model(props: IModel) {

    const { children, setIsOpen, clearInputFun } = props;

    return (
        <div onClick={() => {
            setIsOpen && setIsOpen(false);
            clearInputFun && clearInputFun("");
        }}
            className="fixed z-50 inset-0 flex items-center justify-center backdrop-brightness-20">
            <div onClick={(e) => e.stopPropagation()} className="border border-gray-600 max-w-lg w-full py-3 px-5 rounded-md bg-black">
                {
                    children
                }
            </div>
        </div>
    )
}