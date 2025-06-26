'use client'
import React, { useState } from 'react'
import Accordian from './components/Accordian'

export type contentType = {
    faqid: string,
    faqtitle: string,
    faqcontent: string
}

const content: contentType[] = [
    {
        faqid: "esim-what",
        faqtitle: "What is an eSIM?",
        faqcontent:
            "An eSIM (embedded SIM) is a digital SIM card built directly into your device. It allows you to activate cellular plans digitally without needing a physical SIM card.",
    },
    {
        faqid: "esim-devices",
        faqtitle: "Which devices support eSIM?",
        faqcontent:
            "Many modern smartphones support eSIM, including recent iPhone models (iPhone XS and newer), Google Pixel phones, Samsung Galaxy devices, and select iPads.",
    },
    {
        faqid: "esim-dual",
        faqtitle: "Can I use both eSIM and physical SIM simultaneously?",
        faqcontent:
            "Yes, most eSIM-compatible devices support Dual SIM functionality, allowing you to use both an eSIM and a physical SIM card at the same time.",
    },
    {
        faqid: "esim-activation",
        faqtitle: "How do I activate an eSIM?",
        faqcontent:
            "To activate an eSIM, you typically scan a QR code provided by your carrier or enter the activation details manually in your device settings.",
    },
    {
        faqid: "esim-benefits",
        faqtitle: "What are the advantages of using an eSIM?",
        faqcontent:
            "eSIMs offer several benefits: easy switching between carriers, no physical SIM card needed, ability to store multiple profiles, and environmentally friendly."
    }
]

const Home = () => {


    const [open, setOpen] = useState<string>(content[0].faqid)

    return (
        <div className="max-w-[1500px] flex items-center justify-center md:p-5 p-2">
            <div className="w-full flex items-center justify-center gap-4 flex-col">
                <h1 className="font-bold text-3xl">ESim FAQ</h1>
                <div className="flex items-center justify-center flex-col gap-3">
                    {content.map((item) => {
                        return <Accordian open={open} setOpen={setOpen} key={item.faqid} item={item} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
