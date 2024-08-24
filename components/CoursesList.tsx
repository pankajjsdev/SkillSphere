import React from 'react';

const courses = [
  {
    title: "Master Remote Team Management",
    category: "Technology",
    description: "Learn effective strategies to manage and lead remote teams with confidence.",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg",
    link: "#",
    badgeColor: "text-rose-500 bg-rose-100",
    author: "Martin Jones",
    date: "June 12, 2021",
    price: "Free"
  },
  {
    title: "Launch Successful Product Campaigns",
    category: "Marketing",
    description: "Discover proven techniques to create compelling product launch campaigns.",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg",
    link: "#",
    badgeColor: "text-sky-500 bg-sky-100",
    author: "Martin Jones",
    date: "June 12, 2021",
    price: "$49.99"
  },
  {
    title: "Email Marketing Mastery",
    category: "Email Marketing",
    description: "Learn from top marketers and elevate your email marketing strategies.",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg",
    link: "#",
    badgeColor: "text-sky-500 bg-sky-100",
    author: "Martin Jones",
    date: "June 12, 2021",
    price: "$29.99"
  },
  {
    title: "Data Science and Machine Learning",
    category: "Data Science",
    description: "Master the fundamentals of data science and machine learning techniques.",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg",
    link: "#",
    badgeColor: "text-green-500 bg-green-100",
    author: "Sarah Lee",
    date: "July 22, 2021",
    price: "$99.99"
  },
  {
    title: "Advanced Web Development",
    category: "Web Development",
    description: "Learn advanced techniques in web development, including React and Node.js.",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg",
    link: "#",
    badgeColor: "text-indigo-500 bg-indigo-100",
    author: "John Doe",
    date: "August 5, 2021",
    price: "$79.99"
  },
  {
    title: "Creative Graphic Design",
    category: "Design",
    description: "Explore the world of graphic design and learn to create stunning visuals.",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg",
    link: "#",
    badgeColor: "text-pink-500 bg-pink-100",
    author: "Emily Clark",
    date: "September 14, 2021",
    price: "Free"
  },
  {
    title: "Digital Marketing Essentials",
    category: "Marketing",
    description: "Get started with digital marketing and learn key strategies for success.",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-3.jpg",
    link: "#",
    badgeColor: "text-blue-500 bg-blue-100",
    author: "David Brown",
    date: "October 2, 2021",
    price: "$39.99"
  },
  {
    title: "Project Management Professional",
    category: "Project Management",
    description: "Develop the skills needed to manage projects effectively and efficiently.",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-1.jpg",
    link: "#",
    badgeColor: "text-orange-500 bg-orange-100",
    author: "Lisa White",
    date: "November 18, 2021",
    price: "$89.99"
  },
  {
    title: "Cybersecurity Fundamentals",
    category: "Cybersecurity",
    description: "Learn the basics of cybersecurity and how to protect your digital assets.",
    image: "https://cdn.rareblocks.xyz/collection/celebration/images/blog/1/blog-post-2.jpg",
    link: "#",
    badgeColor: "text-red-500 bg-red-100",
    author: "Michael Johnson",
    date: "December 7, 2021",
    price: "Free"
  }
];

function CoursesList() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Explore Our Latest Courses</h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Unlock new skills and advance your career with our diverse range of courses designed by industry experts.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
          {courses.map((course, index) => (
            <div key={index}>
              <a href={course.link} title={course.title} className="block aspect-w-4 aspect-h-3">
                <img className="object-cover w-full h-full" src={course.image} alt={course.title} />
              </a>
              <span className={`inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full mt-9 ${course.badgeColor}`}>
                {course.category}
              </span>
              <p className="mt-6 text-xl font-semibold">
                <a href={course.link} title={course.title} className="text-black">{course.title}</a>
              </p>
              <p className="mt-4 text-gray-600">{course.description}</p>
              <p className="mt-2 text-gray-900 font-bold">
                {course.price === "Free" ? "Free" : `${course.price}`}
              </p>
              <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
              <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
                {course.author} • {course.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesList;
