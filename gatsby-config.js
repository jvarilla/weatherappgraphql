module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Weather - DarkSky and OpenWeather`,
  /*  pathPrefix: '/static-gatsby-weather',*/
  },
  plugins: [
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "GWA",
      short_name: "GWA",
      start_url:"/",
      background_color: "#6b37bf",
      theme_color: "#6b37bf",
      //Enables "Add to Homescreen" prompt and disables broser UI (including)
      //see https://developers.google.lcom/web/fundamentals/web-app-manifest/#
      display: "standalone",
      icon: "./src/assets/icon.png"
    },
  }, 
  'gatsby-plugin-offline',
 {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: '15bf72d6af8f9a8a636e71d3f48ed98e',
        location: 'Chicago',
        units: 'imperial',
        type: 'weather'
      },
    },
  
    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: 'd0932053738445fc2589f3944410173d',
        latitude: '42.0334',
        longitude: '-87.8834',
        exclude: ['minutely']
      },
    } 
    
  ]
}