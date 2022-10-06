import axios from "axios";
import { remark } from 'remark';
import html from 'remark-html';

import { getAllPostIds } from '../lib/posts.js';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}


// export const getPostByIds = async id => {
//     try {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/posts/${id}`
//       )
//       return response.data
//     } catch (error) {
//       console.log(error)
//     }
// }

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}
