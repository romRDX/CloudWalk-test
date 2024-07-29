import React, { useState } from "react";
import styles from "./imgSkeleton.module.css";

const ImgSkeleton = ({ src, width, height, alt }) => {

    const [loaded, setLoaded] = useState(false);

    return (
        <div style={{ width: width, height: height, position: 'relative' }}>
                {!loaded && (
                    <div className={styles['img-skeleton__skeleton']} />
                )}
                <img
                    src={src}
                    alt={alt}
                    onLoad={() => setLoaded(true)}
                    className={`${styles['img-skeleton__img']} ${ loaded && styles['img-skeleton__img--loaded'] }`}
                    width={width}
                    height={height}
                />
        </div>
    )
}

export default ImgSkeleton;
