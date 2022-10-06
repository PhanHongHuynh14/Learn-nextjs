import React from 'react'
import { getAllPostIds } from '../../lib/posts.js';
import { getAllPostIds, getPostData } from '../../lib/posts.js';



const Post = ( postData) => {
    <Layout>
			<Card className='my-3 shadow'>
				<Card.Body>
					<Card.Title>{postData.title}</Card.Title>
					<Card.Text>{postData.body}</Card.Text>
					<Link href='/posts'>
						<Button variant='dark'>Back</Button>
					</Link>
				</Card.Body>
			</Card>
		</Layout>
}
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }

export const getStaticPaths = async () => {
	const paths = await getPostIds()
    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({ params }) {
    const postData = getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
  }

// export const getStaticProps = async ({ params }) => {
// 	const post = await getPostById(params.id)

// 	return {
// 		props: {
// 			post
// 		},
// 		revalidate: 1
// 	}
// }

export default Post
