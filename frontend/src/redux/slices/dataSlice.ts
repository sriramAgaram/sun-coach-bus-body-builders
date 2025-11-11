import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/data.json';

interface DataState {
  layout: {
    navbar: {
      widgetId: string;
      brand: {
        logo: string;
        name: string;
      };
      navLinks: Array<{ label: string; path: string }>;
      cta: Array<{ name: string; action: string; color: string }>;
    };
    footer: {
      widgetId: string;
      brand: {
        logo: string;
        name: string;
      };
      description: string;
      quickLinks: Array<{ label: string; path: string }>;
      contact: {
        address: string;
        email: string;
        phone: string;
      };
      socialLinks: Array<{ platform: string; url: string }>;
      cta: Array<{ name: string; action: string; color: string }>;
    };
  };
  homePage: {
    heroBanner: {
      widgetId: string;
      title: string;
      subtitle1: string;
      subtitle2: string;
      bgImages: string[];
      cta: Array<{ name: string; action: string; color: string }>;
    };
    ourInsights: {
      widgetId: string;
      title: string;
      description: string;
      bgImages: string[];
      articles: Array<{
        title: string;
        excerpt: string;
        image: string;
        link: string;
      }>;
    };
    products: {
      widgetId: string;
      title: string;
      description: string;
      bgImages: string[];
      items: Array<{
        name: string;
        description: string;
        image: string;
        link: string;
      }>;
    };
    services: {
      widgetId: string;
      title: string;
      description: string;
      bgImages: string[];
      items: Array<{
        name: string;
        description: string;
        icon: string;
      }>;
    };
    ourClients: {
      widgetId: string;
      title: string;
      description: string;
      bgImages: string[];
      logos: Array<{ image: string; alt: string }>;
    };
  };
  busImages: Record<string, string[]>;
  clientImages: string[];
}

const initialState: DataState = data as unknown as DataState;

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // Add any dynamic reducers if needed, e.g. for updating data
  },
});

export default dataSlice.reducer;
export const {} = dataSlice.actions;
