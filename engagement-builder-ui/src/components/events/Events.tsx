import { useState } from "react";
import { EngageEventProps } from "./types";
import Axios from "axios"; 

function EngageEvents(props: EngageEventProps){
    // const [image, setImage] = useState<string | undefined>(undefined);

    // Axios.get(props.eventMeta.imageUrl, {
    //     responseType: "arraybuffer",
    //     headers: {
    //       "Content-Type": "image/jpeg",
    //       mode: "no-cors"
    //     },
    //   })
    //   .then((res) => {
    //   const base64 = btoa(
    //     new Uint8Array(res.data).reduce(
    //       (data, byte) => data + String.fromCharCode(byte),
    //       ''
    //     )
    //   )
    //   setImage(base64)
    // })

    return (
        <div>
            <h1>{props.eventMeta.name}</h1>
            <img src={props.eventMeta.imageUrl} alt={props.eventMeta.name} loading="lazy" width={600} height={400}/>
        </div>
    )
}

export default EngageEvents;