import { useState } from "react"
import { v4 as uuid } from 'uuid'

let elements = [
    {
        title: "Sale & Offers",
        children: ["Up to 50% Off", "Sale"]
    },
    {
        title: "Gender",
        children: ["Male", "Female", "Unisex"]
    },
    {
        title: "Kids",
        children: ["Boys", "Girls"]
    },
    {
        title: "Color",
        children: ["Black", "White", "Red", "Green", "Brown", "Grey", "Multi-Color", "Orange",
        "Pink", "Purple", "Yellow"]
    },
    {
        title: "Shop By Price",
        children: ["$0 - $5", "$5 - $10", "$10 - $20", "$20 - $40", "Over $40" ]
    },
];

const Element = ({name, children}) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between py-4">
                <p>{name}</p>
                <i className='bx bx-chevron-down'></i>
            </div>
            {
                open ? (
                    children
                ) : (
                    null
                )
            }
        </div>
    )
}

const Filters = () => {
  return (
    <div className="flex flex-col flex-1">
        {
            elements.map((element) => (
                <div key={uuid()}>
                    <Element name={element.title} key={uuid()}>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                {
                                    element.children.map(child => (
                                        <div key={uuid()} className="flex items-center gap-2">
                                            <input type="check" />
                                            <p>{child}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </Element>
                    <hr className="h-[2px]"/>
                </div>
            ))
        }
    </div>
  )
}

export default Filters