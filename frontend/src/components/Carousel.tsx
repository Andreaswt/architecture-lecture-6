import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css"; // core Swiper
import "swiper/css/navigation"; // navigation module

const Carousel = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const maxRetries = 15;
      let retries = 0;
      let retry = true;
      do {
        try {
          const response = await axios.get(
            "http://localhost:3001/get-product-recommendations"
          );
          setProducts(response.data);
          setErrorMessage(null);
          retry = false;
        } catch (error) {
          setErrorMessage("Error loading products, trying again...");
        }
      } while (retry && retries++ < maxRetries);
    };

    fetchProducts();
  }, []);

  return (
    <div className="content-container">
      <h2>Recommended Products!</h2>

      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={3}
        >
          {products.map((product) => (
            <SwiperSlide key={product.title}>
              <div className="product-image-container">
                <img src={product.imageUrl} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
              <p>
                Price: $
                {Math.round(
                  product.basePrice *
                    (1 - product.discountRate) *
                    product.taxRate
                )}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Carousel;
