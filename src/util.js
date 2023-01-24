function chillHop() {
  return [
    {
      name: "Dreaming",
      artist: "Misha, Jussi Halme, El Train, goodie bags",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
      id: crypto.randomUUID(),
      active: false,
      color: ["#968b6f", "#2f352c"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=49425",
    },
    {
      name: "Snap Back",
      artist: "El Train, Marc Mathias",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/12/b48463b9b5a0351cc2f34b31fcee6185fdb03bb5-1024x1024.jpg",
      id: crypto.randomUUID(),
      active: false,
      color: ["#968b6f", "#2f352c"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=49429",
    },
    {
      name: "Sleep Walker",
      artist: "J.Folk",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
      id: crypto.randomUUID(),
      active: false,
      color: ["#4aa98d", "#ebdeab"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=49425",
    },
  ]
}

export default chillHop
