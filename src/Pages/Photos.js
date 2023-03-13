import React, { useContext } from "react";
import { Context } from "../Context";
import Image from "../component/Image";
import { getClass } from "../utils/index";
function Photos() {
  const { allPhotos } = useContext(Context);

  const imageElem = allPhotos.map((img, i) => {
    return <Image key={img.id} img={img} className={getClass(i)} />;
  });
  return <main className="photos">{imageElem}</main>;
}

export default Photos;
