import { useState, useEffect } from "react";

/**
 *
 * @param {string} title
 * @param {string} imageUrl
 * @returns
 */
export default function Thumbnail({ title, imageUrl }) {
  const [isLoad, setIsLoad] = useState(true);

  const imageErrorHandler = () => {
    setIsLoad(false);
  };

  useEffect(() => {
    if (!imageUrl || imageUrl === "") {
      setIsLoad(false);
    }
  }, [imageUrl]);

  return (
    <div className="bg-black max-w-3xl">
      {isLoad ? (
        <img src={imageUrl} alt={title} onError={imageErrorHandler} />
      ) : (
        <h2 className="text-yellow-400">{title}</h2>
      )}
    </div>
  );
}
