'use client';

import { Volume, Volume2 } from 'lucide-react';
import Image from 'next/image';

// TODO: Import dependencies yang diperlukan
// import { motion } from "motion/react";
// import { ... } from "lucide-react";

export function MusicPlayer() {
  // TODO: Implementasikan state management untuk playing, paused, loading

  // TODO: Implementasikan handler untuk play/pause

  // TODO: Implementasikan komponen music player sesuai desain Figma
  // Struktur yang perlu dibuat:
  // - Container dengan background dan shadow animations
  // - Album artwork dengan rotation dan scale animations
  // - Equalizer bars dengan stagger effect
  // - Progress bar dengan fill animation
  // - Control buttons (play/pause, skip, volume)

  return (
    <div className='p-xl gap-2xl bg-black-soft w-500 flex-col rounded-2xl'>
      {/* Info */}
      <div className='info'>
        {/* details */}
        <div className='details'>
          {/* image */}
          <Image src='/audio.png' width={64} height={64} alt='Audio' />
          {/* text-container */}
          <div className='text-container'>
            <h2 className='text-center text-gray-500'>Awesome Song Title</h2>
            <p>Amazing Artist</p>
          </div>
        </div>
        {/* equalizer */}
        <div className='equalizer'>
          <div className='bg-primary-200 h-8 w-6'></div>
          <div className='bg-primary-200 h-8 w-6'></div>
          <div className='bg-primary-200 h-8 w-6'></div>
          <div className='bg-primary-200 h-8 w-6'></div>
          <div className='bg-primary-200 h-8 w-6'></div>
        </div>
      </div>
      {/* Progress */}
      <div className='relative h-8 w-468 rounded-full bg-neutral-800'>
        <div className='absolute top-0 left-0 h-full w-155 rounded-l-full bg-red-500'></div>
      </div>
      {/* Time */}
      <div className='time'>
        <p>1:23</p>
        <p>3:45</p>
      </div>
      {/* Icons */}
      <div className='icons'>
        <button className='shuffle'></button>
        <button className='previous'></button>
        <button className='play'></button>
        <button className='next'></button>
        <button className='repeat'></button>
      </div>
      {/* Volume */}
      <div className='flex-center'>
        <button className='volume-button size-16'></button>
        <Volume2 />
        <div className='volume-area relative h-4 w-444 rounded-full bg-neutral-800'>
          <div className='volume-bar absolute h-full w-307 rounded-l-full bg-neutral-500'></div>
        </div>
      </div>
    </div>
  );
}
