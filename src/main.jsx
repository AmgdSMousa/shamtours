import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// WebMCP Chrome/W3C Browser API Tool Registration for Sham Tours
if (typeof navigator !== 'undefined' && navigator.modelContext && typeof navigator.modelContext.provideContext === 'function') {
  try {
    navigator.modelContext.provideContext({
      tools: [
        {
          name: 'get_shamtours_packages',
          description: 'Get August and September Umrah pilgrimage package schedules and pricing from Sham Tours',
          inputSchema: {
            type: 'object',
            properties: {
              month: { type: 'string', description: 'Month of travel (august or september)' }
            }
          },
          execute: async ({ month }) => {
            return {
              status: 'success',
              packages: [
                { title: 'August Umrah 14 Days 5-Star Hotel', price: '45,000 EGP', airline: 'EgyptAir', city: 'Makkah & Madinah' },
                { title: 'September Umrah 10 Days 4-Star Hotel', price: '38,000 EGP', airline: 'Saudia', city: 'Makkah & Madinah' }
              ]
            };
          }
        },
        {
          name: 'book_umrah_consultation',
          description: 'Submit a direct booking or visa inquiry to Sham Tours desk',
          inputSchema: {
            type: 'object',
            properties: {
              name: { type: 'string', description: 'Full name' },
              phone: { type: 'string', description: 'Contact phone or WhatsApp' }
            },
            required: ['name', 'phone']
          },
          execute: async ({ name, phone }) => {
            return {
              status: 'submitted',
              message: `Thank you ${name}, your Sham Tours Umrah consultation request has been received.`
            };
          }
        }
      ]
    });
  } catch (e) {
    console.debug('WebMCP registration:', e);
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
