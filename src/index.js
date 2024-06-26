import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import GifExpertApp from './GifExpertApp';


const root = createRoot(document.getElementById('root'));

root.render(

  <StrictMode>

    <GifExpertApp />

  </StrictMode>

);

