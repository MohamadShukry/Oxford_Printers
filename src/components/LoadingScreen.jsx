import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#0F172A',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      <div style={{ position: 'relative', width: 120, height: 120, marginBottom: 24 }}>
        {/* Outer alignment circle */}
        <motion.div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '4px dashed rgba(255, 255, 255, 0.2)',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        {/* Alignment axis horizontal */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '-10px',
            right: '-10px',
            height: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            transform: 'translateY(-50%)'
          }}
        />

        {/* Alignment axis vertical */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '-10px',
            bottom: '-10px',
            width: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            transform: 'translateX(-50%)'
          }}
        />

        {/* CMYK overlapping rings */}
        {/* Cyan Ring */}
        <motion.div
          style={{
            position: 'absolute',
            width: 60,
            height: 60,
            borderRadius: '50%',
            border: '4px solid #00AEEF',
            top: 15,
            left: 15,
            mixBlendMode: 'screen',
          }}
          animate={{
            x: [0, 8, -8, 0],
            y: [0, -8, 8, 0],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Magenta Ring */}
        <motion.div
          style={{
            position: 'absolute',
            width: 60,
            height: 60,
            borderRadius: '50%',
            border: '4px solid #EC008C',
            top: 15,
            right: 15,
            mixBlendMode: 'screen',
          }}
          animate={{
            x: [0, -8, 8, 0],
            y: [0, 8, -8, 0],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Royal Blue/Key Ring */}
        <motion.div
          style={{
            position: 'absolute',
            width: 60,
            height: 60,
            borderRadius: '50%',
            border: '4px solid #003366',
            bottom: 15,
            left: 30,
            mixBlendMode: 'screen',
          }}
          animate={{
            x: [0, 6, -6, 0],
            y: [0, 6, -6, 0],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.h2
        style={{
          fontFamily: "'Outfit', sans-serif",
          color: '#FFFFFF',
          fontSize: '1.75rem',
          fontWeight: '700',
          letterSpacing: '1px',
          textAlign: 'center',
          margin: 0
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        OXFORD
      </motion.h2>

      <motion.p
        style={{
          color: '#00AEEF',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.85rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '4px',
          marginTop: 6,
          marginBottom: 0
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Printers & Publishers
      </motion.p>

      {/* Alignment calibration text */}
      <motion.span
        style={{
          position: 'absolute',
          bottom: 30,
          color: 'rgba(255,255,255,0.3)',
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          letterSpacing: '1px'
        }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        CALIBRATING PRESS REGISTRATION... 100%
      </motion.span>
    </motion.div>
  );
};

export default LoadingScreen;
