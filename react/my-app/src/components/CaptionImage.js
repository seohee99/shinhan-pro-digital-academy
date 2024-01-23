import React from "react";

export default function CaptionImage(props){
    return (
        <div style={{textAlign:'center'}}>
            <img style={{width:200}} src={props.imgUrl} alt={props.caption}  />
            <p> {props.caption} </p>

            <img style={{width:200}} src="https://m.pororomall.com/web/product/big/202110/c3efd149cf7032c4582f56d8b5c3e6ff.jpg"></img>
            <p>이건 트럭이에요</p>
        </div>
    )
}