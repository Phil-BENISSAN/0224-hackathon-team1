import testimonials from "../assets/testimonials";

function Home() {
  return (
    <>
      <div>Home</div>
      <section className="testimonials-section">
        <Swiper
          spaceBetween={0}
          centeredSlides
          speed={1500}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            draggable: true,
          }}
          navigation
          modules={[Autoplay, Pagination, Navigation, A11y]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
          <SwiperSlide>
            <h2 className="testimonial-title">{testimonial.title}</h2>
            <p className="testimonial-text">{testimonial.testimonial}</p>
            <p>{testimonial.name}</p>
          </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Home;
