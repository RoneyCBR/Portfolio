import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Slide.module.css";
import ItemCard from "./ItemCard";

const Slide = ({ images }) => {
    const [ position, setPosition ] = useState(0);
    const [ autoPlay, setAutoPlay ] = useState(false);
    // const [ first, setFirst ] = useState(true);
    const [ showControls, setShowControls ] = useState(false);

    const handleShowControl = () => {
        setShowControls(!showControls);
    }
    const handleAutoPlay = () => {
        setAutoPlay(!autoPlay);
    }
    const handleManualPlay = () => {
        setAutoPlay(false);
    }

    useEffect(() => {
        if(!autoPlay){
            return () => {};
        }
        let interval = null;
        const time = 3000;
        const showImage = () => {
            interval = setInterval(() => {
                if (position === images.length - 1) {
                setPosition(0);
                } else {
                setPosition(position + 1);
                }
            }, time);
        }
        showImage();
        return () => clearInterval(interval);
    }, [position, images,autoPlay]);

    return (
        <div className={styles.contentSlides} >
            <ItemCard 
                src={images[position]}
            />
            {
            showControls ? 
            <div className={styles.contentInfo} onClick={handleShowControl}>
                <div className={styles.contentOptions}>
                    <h3 className={styles.title}>Reproducir</h3>
                    <div className={styles.options}>
                        <div className={styles.automatic}>
                            <div className={styles.contentButton}>
                                <button 
                                    className={styles.buttonPlay}
                                    onClick={handleAutoPlay}
                                >
                                    {autoPlay ? "Stop":"Go"}
                                </button>
                            </div>
                            Automatico
                        </div>
                        <div className={styles.standard}>
                            <div className={styles.contentButton}>
                                <button 
                                    className={styles.buttonPlay}
                                    onClick={handleManualPlay}
                                >
                                    Go
                                </button>
                            </div>
                            Manual
                        </div>
                    </div>
                </div>
            </div>
            :
            <div className={styles.minOptions} >
                <div className={styles.minButton}>
                    <button 
                        className={styles.buttonControls}
                        onClick={handleShowControl}
                    >
                        Controls
                    </button>
                </div>
            </div>
            }
        </div>
    );
};

Slide.propTypes = {
    images: PropTypes.array
};

export default Slide;