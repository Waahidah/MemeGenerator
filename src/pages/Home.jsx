import React, { useEffect, useState } from "react";

import MemeCard from "../components/Card";
import { getALLMemes } from "../api/memes";
const Homepage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getALLMemes().then((memes) => {
            setData(memes.data.memes)
            console.log(data);
        });

    }, []);
    return (
        <div className="row">
            {
                data?.map(el => <MemeCard img={el.url} title={el.name} />)
            }
        </div>
    )
}
export default Homepage;