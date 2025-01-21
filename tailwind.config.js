module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "2560px",
    },
    colors: {
      brick_red: "#B22222",
      creamy_white: "#FAF3E0",
      pine_green: "#2E8B57",
      gold_accent: "#D4AF37",
      main_color: "#213555",
      secondary_color: "#3E5879",
      text_color: "#F5EFE7",
      accent_color: "#D8C4B6",
    },
    extend: {
      fontFamily: {
        didot: ["GFS Didot"],
        poppins: ["Poppins"],
      },
    },
  },
};
