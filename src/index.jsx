import React from 'react'
import ReactDOM from 'react-dom/client'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      {import.meta.env.VITE_APP_NAME}
    </div>
  </React.StrictMode>,
)
