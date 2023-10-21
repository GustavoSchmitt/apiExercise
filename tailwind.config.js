/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'poke-main-bg':'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80ff523f-ff84-457d-a547-464588d3a3d3/df0dwcb-c264fc01-23cf-43e7-b42b-2d3a6a6d565c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwZmY1MjNmLWZmODQtNDU3ZC1hNTQ3LTQ2NDU4OGQzYTNkM1wvZGYwZHdjYi1jMjY0ZmMwMS0yM2NmLTQzZTctYjQyYi0yZDNhNmE2ZDU2NWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fSXghpSjeaR409VsfrJnq_dl_imCixcDB_0lmEshSis")'
      },
      boxShadow:{
        'image-card':'0 73px 80px #fff'
      }
    },
  },
  plugins: [],
}

