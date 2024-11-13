const url = null // 'https://jsonplaceholder.typicode.com/posts?_limit=6'

const posts = [
  {
    id: 1,
    title: "Titolo del Post",
    image: 'https://placehold.co/600x400',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html", "css"],
    published: true,
  },
  {
    id: 2,
    title: "Titolo del Post",
    image: 'https://placehold.co/600x400',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "css"],
    published: true,
  },
  {
    id: 3,
    title: "Titolo del Post",
    image: 'https://placehold.co/600x400',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "php"],
    published: true,
  },
  {
    id: 4,
    title: "Titolo del Post",
    image: 'https://placehold.co/600x400',
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html"],
    published: false,
  },
];


/* if (!url) {
  //Placeholder
  posts = (
    {
      id: "Placeholder",
      title: 'Post Title',
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vel turpis ac neque volutpat iaculis.",
      img: "https://via.placeholder.com/600x400"
    }
  )
} else {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        const post = {
          id : element.id,
          title: element.title,
          content: element.body,
          img: element.thumbnail
        }
  
        posts.push(post)
      });
    })
    .catch(err => console.error('Error:', err))
    .finally(() => {
      if (!posts) {
        //Placeholder
        posts.push(
          {
            id: "Placeholder",
            title: 'Post Title',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vel turpis ac neque volutpat iaculis.",
            img: "https://via.placeholder.com/600x400"
          }
        )
      }
    });  
} */

export default posts;