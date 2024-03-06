import React from "react";

export const PostCard = (props : {title : string,desc : string}) => {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.desc}</p>
        </div>
    );
}