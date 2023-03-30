import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGalleryHeaders } from '../api/fetchGalleryHeaders';

const fetchGalleryHeadersAsyncThunk = createAsyncThunk('galleryHeaders/fetch', fetchGalleryHeaders);

export { fetchGalleryHeadersAsyncThunk };
