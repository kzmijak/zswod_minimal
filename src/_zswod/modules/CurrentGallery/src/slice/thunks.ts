import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGallery } from '../api/fetchGallery';

const fetchGalleryAsyncThunk = createAsyncThunk('currentGallery/fetch', fetchGallery);

export { fetchGalleryAsyncThunk };
