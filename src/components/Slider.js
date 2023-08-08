import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';

function Slider({movies}) {
    const renderSlides = movies.slice(0, 5).map(
        (movie, index) => {
            <div key={index}>
                <img src={movie.large_cover_image} />
            </div>
        }
    )

    const [currentIndex, setCurrentIndex] = useState(0);
    function handleChange(index) {
        setCurrentIndex(index);
    }

    return (
        <div style={{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Carousel
            showArrows={false}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            selectedItem={currentIndex}
            onChange={handleChange}
            style={{width: '400px'}}>
            {renderSlides}
            </Carousel>
        </div>
    );
}

export default Slider;