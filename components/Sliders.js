"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { menuItems, testimonials } from "@/data/content";

function ProductSlider({ items, ariaLabel, ranked = false }) {
  return (
    <Swiper
      modules={[A11y, Autoplay, Navigation, Pagination]}
      slidesPerView={1.08}
      spaceBetween={18}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: ranked ? 5200 : 5600, disableOnInteraction: true, pauseOnMouseEnter: true }}
      breakpoints={{ 720: { slidesPerView: 2.05 }, 1040: { slidesPerView: 3 } }}
      aria-label={ariaLabel}
      className="!pb-12"
    >
      {items.map((item, index) => (
        <SwiperSlide key={`${ariaLabel}-${item.id}`}>
          <article className="h-full overflow-hidden rounded-[1.4rem] bg-white shadow-glow">
            <div className="relative aspect-[4/3]">
              <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width: 768px) 90vw, 33vw" />
              {ranked && <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-saffron text-lg font-black text-espresso">#{index + 1}</span>}
            </div>
            <div className="p-5">
              <p className="mb-2 flex items-center gap-1 text-sm font-black text-saffron">
                <Star size={16} fill="currentColor" /> {item.rating}
              </p>
              <h3 className="text-xl font-black text-espresso">{item.name}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-charcoal/68">{item.description}</p>
              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="text-xl font-black text-terracotta">{item.price ? `Rs. ${item.price}` : "Ask at counter"}</span>
                <Link href={`/menu?category=${encodeURIComponent(item.category)}`} className="btn-secondary px-4 py-2">View Menu</Link>
              </div>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export function BestSellerSlider() {
  const bestSellers = menuItems.filter((item) => item.category === "Best Sellers").slice(0, 8);
  return <ProductSlider items={bestSellers} ariaLabel="Best selling Chaat Adda products" ranked />;
}

export function PopularProductsSlider() {
  const popular = menuItems.filter((item) => item.badges.includes("Popular")).slice(0, 10);
  return <ProductSlider items={popular} ariaLabel="Popular Chaat Adda products" />;
}

export function ReviewSlider() {
  return (
    <Swiper
      modules={[A11y, Autoplay, Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={18}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000, disableOnInteraction: true, pauseOnMouseEnter: true }}
      breakpoints={{ 760: { slidesPerView: 2 }, 1080: { slidesPerView: 3 } }}
      aria-label="Customer review samples"
      className="!pb-12"
    >
      {testimonials.map((review) => (
        <SwiperSlide key={`${review.name}-${review.category}`}>
          <article className="flex min-h-72 flex-col rounded-[1.4rem] bg-white/85 p-6 shadow-glow">
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-espresso text-sm font-black text-cream">{review.initials}</span>
              <div>
                <h3 className="font-black text-espresso">{review.name}</h3>
                <p className="text-sm text-charcoal/55">{review.category}</p>
              </div>
            </div>
            <p className="text-saffron" aria-label={`${review.rating} star rating`}>
              {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
            </p>
            <p className="mt-4 flex-1 leading-7 text-charcoal/72">{review.text}</p>
            <p className="mt-5 text-sm font-bold text-charcoal/55">{review.date}</p>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
