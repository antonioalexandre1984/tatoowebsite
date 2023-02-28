import { galleryData } from "../data"
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import { Photo, PhotoAlbum } from 'react-photo-album';
import { motion } from 'framer-motion';
import React, { useState, MouseEvent } from "react"
import { fadeIn } from "../variants";


const slides = galleryData.images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}))


export function GallerySection() {
  // index state
  const [open, setOpen] = useState(true);
  // destructuring gallery data
  const { title, btnText, btnIcon, images } = galleryData;

  function handlePhotoClick(event: MouseEvent<HTMLDivElement>, photo: Photo, index: number) {
    setOpen(open);
  }

  return (
    <section className='bg-[#f9f9f9] section relative mt-[40px] lg:mt-0'>
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn('up')}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 max-w-[370px] lg:mb-20">{title}</motion.h2>
      </div>
      {/* photo album */}
      <motion.div
        variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className="mb-8 lg:mb-20">
        <PhotoAlbum
          onClick={() => setOpen(true)}
          layout='rows'
          photos={images} />

        {/* lightbox */}

        <Lightbox
          open={open}
          slides={slides}
          styles={{
            container: {
              background: 'rgba(0, 0, 0,.9)',
            }
          }}
          close={() => setOpen(false)}
        />
      </motion.div>
      { /* button */}
      <motion.div
        variants={fadeIn('up')}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
        className="flex justify-center">
        <button className="btn btn-lg btn-dark">
          {btnText} <div className="text-xl">{btnIcon}</div>
        </button>
      </motion.div>
    </section>
  )
}