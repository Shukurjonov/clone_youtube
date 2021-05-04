let videos = window.localStorage.getItem('videosData')

if(!videos) {
  videos = [
    {
      videoId: 1,
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nH84_s6fqvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      img: "img/abdukarim.jpg",
      heading: " Mazlumning aytganlari | @Abdukarim Mirzayev",
    },
    {
      videoId: 2,
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nH84_s6fqvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      img: "https://picsum.photos/250/150",
      heading: "Tabiat manzaralari | @Neture",
    },
    {
      videoId: 3,
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nH84_s6fqvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      img: "https://picsum.photos/250/150?random=2",
      heading: "Kayfiyat a'lo| @Neture",
    },
    {
      videoId: 4,
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nH84_s6fqvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      img: "https://picsum.photos/250/150?random=3",
      heading: "The best Music | @Neture",
    },
    
    {
      videoId: 5,
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nH84_s6fqvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      img: "https://picsum.photos/250/150?random=4",
      heading: "Interesting book presentation | @Neture",
    },
    
    {
      videoId: 6,
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nH84_s6fqvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      img: "https://picsum.photos/250/150?random=5",
      heading: "A miraculous sight | @Neture",
    },
    
    {
      videoId: 7,
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nH84_s6fqvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      img: "https://picsum.photos/250/150?random=6",
      heading: "Terrible situation| @Neture",
    },
    
    {
      videoId: 8,
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nH84_s6fqvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      img: "https://picsum.photos/250/150?random=7",
      heading: "Funny story | @Neture",
    },
    
    {
      videoId: 9,
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nH84_s6fqvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      img: "https://picsum.photos/250/150?random=8",
      heading: "Scientific research | @Neture",
    },
    
    {
      videoId: 10,
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nH84_s6fqvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      img: "https://picsum.photos/250/150?random=9",
      heading: "So impressive | @Neture",
    },
    
    {
      videoId: 11,
      iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/nH84_s6fqvA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
      img: "https://picsum.photos/250/150?random=10",
      heading: "Football king Cristiano | @Neture",
    }
  ]
} else {
  videos = JSON.parse(videos)
}
