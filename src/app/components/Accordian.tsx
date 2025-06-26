'use client'
import React, { useState } from 'react'
import { contentType } from '../Home'
import styles from '../accordian.module.css'
import { LiaAngleDownSolid } from "react-icons/lia";

interface accordianProps {
    item: contentType,
    open: string,
    setOpen: (open: string) => void
}

const Accordian: React.FC<accordianProps> = ({ item, open, setOpen }) => {

    const handleClick = (id: string) => {
        if (open === id) {
            setOpen("")
        } else {
            setOpen(item.faqid)
        }
    }

    return (
        <div className='w-full'>
            <button onClick={() => { handleClick(item.faqid) }} className={`${styles.accordian_header} ${item.faqid === open ? '!border-black !border-2 bg-[#eee]' : ""}`}>
                <h3 className='text-lg font-bold'>{item.faqtitle}</h3>
                <LiaAngleDownSolid />
            </button>
            <div className={`${styles.accordian_content} transition-all ${item.faqid === open ? "py-4 border-t-0" : "h-0 !border-0"}`}>
                <p className='!text-[.9em]'>{item.faqcontent}</p>
            </div>
        </div>
    )
}

export default Accordian
