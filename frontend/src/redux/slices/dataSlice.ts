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
  aboutPage: {
    widgetId: string;
    title: string;
    whoWeAre: {
      title: string;
      companyName: string;
      description: string;
      details: string[];
    };
    whatWeDo: {
      title: string;
      description: string;
      highlight: string;
    };
    vision: {
      title: string;
      description: string;
    };
    mission: {
      title: string;
      description: string;
    };
    whyChooseUs: {
      title: string;
      description: string;
    };
    whyCustomersTrustUs: {
      title: string;
      promise: string;
      points: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    clientInsights: {
      title: string;
      items: Array<{
        label: string;
        value: string;
      }>;
    };
    certificates: {
      title: string;
      description: string;
      items: Array<{
        name: string;
        image: string;
        alt: string;
      }>;
    };
  };
  productsPage: {
    widgetId: string;
    title: string;
    description: string;
    products: Array<{
      id: string;
      name: string;
      icon: string;
      description: string;
      keyFeatures: string[];
      additionalInfo: string;
      imageType: string;
    }>;
  };
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
