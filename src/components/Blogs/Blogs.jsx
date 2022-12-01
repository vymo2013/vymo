import React from 'react';
import Button from '../Button/Button';
import SectionHeading from '../Heading/SectionHeading';
import BlogCard from './BlogCard';
const blogs = [
  {
    id: 0,
    image: '/img/blogs/blog-1.png',
    title: 'Improving Lead Funnel Efficiency for Varthana Finance',
    description:
      'Varthana aims to meet the needs of affordable private school owners by providing loan capital so they can expand their infrastructure.',
  },
  {
    id: 1,
    image: '/img/blogs/blog-2.png',
    title: 'Reducing Turnaround Times (TAT) for HDFC Bank',
    description:
      'Varthana aims to meet the needs of affordable private school owners by providing loan capital so they can expand their infrastructure.',
  },
  {
    id: 2,
    image: '/img/blogs/blog-3.png',
    title: 'Improving Partner Network Health for BAGIC',
    description:
      'Varthana aims to meet the needs of affordable private school owners by providing loan capital so they can expand their infrastructure.',
  },
];
function Blogs() {
  return (
    <div>
      <SectionHeading className="mb-3 md:mb-6">Blogs</SectionHeading>
      <div className="flex flex-wrap mx-[-15px]">
        {blogs.map((blog) => (
          <div className="w-full md:w-1/2 xl:w-1/3" key={blog.id}>
            <div className="p-2 flex h-full">
              <BlogCard {...blog} />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full text-center md:mt-6">
        <Button large>View all</Button>
      </div>
    </div>
  );
}

export default Blogs;
